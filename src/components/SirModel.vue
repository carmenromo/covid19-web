<template>
  <div class="row">
    <div class="col-lg-2 d-flex d-lg-block">
      <form>
        <div class="form-group form-inline">
          <!-- div class="slidecontainer" -->
            <label for="rangeR0"><h3>R0: {{ r0 }}</h3></label>
            <input type="range" min="0" max="7" step="0.1" v-model="r0" class="slider" id="rangeR0">

            <label for="rangeT"><h3>T: {{ t }}</h3></label>
            <input type="range" min="1" max="15" step="1" v-model="t" class="slider" id="rangeT">

            <label for="rangeTm"><h3>Tm: {{ tm }}</h3></label>
            <input type="range" min="0" max="500" step="1" v-model="tm" class="slider" id="rangeTm">

            <label for="rangeQ"><h3>Q: {{ quarantine }}</h3></label>
            <input type="range" min="0" max="100" step="1" v-model="quarantine" class="slider" id="rangeQ">

            <label for="rangeDays"><h3>{{$t('days')}}: {{ days }}</h3></label>
            <input type="range" min="50" max="500" step="10" v-model="days" class="slider" id="rangeDays">

            <label for="rangePop"><h3>N: {{ population }}M</h3></label>
            <input type="range" min="0" max="100" step="0.1" v-model="population" class="slider" id="rangePop">

            <div class="checkbox">
              <br>
              <label><input type="checkbox" v-model="relative">{{$t('relative')}}</label>
            </div>
          <!--/div -->
        </div>
      </form>
    </div>

    <div class="col-lg-5 d-lg-block">
      <line-chart key='chart1' chart-id="line-daily1" v-if="loaded" :chartData="datasets1"
        :title="''" legend :xlabel="$t('labelDays')" :ylabel="ylabel"/>
    </div>

    <div class="col-lg-5 d-lg-block">
      <line-chart key='chart2' chart-id="line-daily2" v-if="loaded" :chartData="datasets2"
        :title="''" legend :xlabel="$t('labelDays')" :ylabel="ylabel"/>
    </div>

  </div>
</template>

<script>
  import LineChart from "./LineChart.vue"
  import _ from "lodash"
  import i18n from '../plugins/i18n'

  export default {
    components: {
      LineChart,
    },
    data () {
      return {
        loaded : true,
        t : 5,
        r0 : 3.5,
        days : 100,
        tm  : 30,
        quarantine : 50,
        population: 47,
        relative : false,
        ylabel : i18n.t('labelCases'),

        datasets1 : {
          labels: [],
          datasets: [],
        },
        datasets2 : {
          labels: [],
          datasets: [],
        },
      }
    },
    computed : {
      locale : function (){
        return i18n.locale
      },
    },
    watch: {
      t: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      r0: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      days: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      tm: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      quarantine: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      population: _.debounce(
        function (newvalue, oldvalue) {
          this.fetchData()
        },
        500),
      relative: _.debounce(
        function (newvalue, oldvalue) {
          if (newvalue){
            this.ylabel = i18n.t('labelCases') + ' (%)'
          }
          else{
            this.ylabel = i18n.t('labelCases')
          }
          this.datasets1 = {labels: [], datasets: []}
          this.datasets2 = {labels: [], datasets: []}
          this.fetchData()
        },
        500),
      locale: function (newvalue, oldvalue) {
        this.fetchData()
      },
    },
    beforeMount() {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        const baseURI = 'https://kzlecbpuc5.execute-api.us-east-2.amazonaws.com/prod/testmodel'
        this.$http.post(baseURI, {
          "model": "SIR",
          "params": {
            "R0"      : this.r0,
            "T"       : this.t,
            "Tm"      : this.tm,
            "days"    : this.days,
            "Q"       : this.quarantine,
            "N"       : this.population*1000000,
            "absolute": !this.relative,
          }
        })
        .then((result) => {
          this.loaded = false
          this.datasets1 = {
            labels: result.data.t,
            datasets: [
              {
                label : i18n.t('susceptible'),
                borderColor: '#249EBF',
                backgroundColor : 'rgba(36, 158, 191, 0.3)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                pointHoverBorderColor: '#249EBF',
                pointHoverBackgroundColor: '#fff',
                pointHoverRadius: 4,
                pointHitRadius: 10,
                pointHoverBorderWidth: 1,
                borderWidth: 1,
                data: result.data.S
              },
              {
                label: i18n.t('recovered'),
                borderColor: '#00590c',
                backgroundColor: 'rgba(0, 89, 12, 0.3)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                pointHoverBorderColor: '#00590c',
                pointHoverBackgroundColor: '#000',
                //pointHoverBackgroundColor: '#fff',
                pointHoverRadius: 4,
                pointHitRadius: 10,
                pointHoverBorderWidth: 1,
                borderWidth: 1,
                data: result.data.R
              }
            ]
          },

          this.datasets2 = {
            labels: result.data.t,
            datasets: [
              {
                label : i18n.t('infected'),
                borderColor: '#bd221c',
                backgroundColor : 'rgba(189, 34, 28, 0.3)',
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                pointHoverBorderColor: '#bd221c',
                pointHoverBackgroundColor: '#fff',
                pointHoverRadius: 4,
                pointHitRadius: 10,
                pointHoverBorderWidth: 1,
                borderWidth: 1,
                data: result.data.I
              },
            ]
          }

          this.loaded = true
        })
      }
    }
  }
</script>

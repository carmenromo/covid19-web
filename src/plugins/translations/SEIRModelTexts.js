const messages = {
    'en': {
      seirModelParagraph1:
        `SEIR introduces una categoría más entre Susceptibles e Infectados, que es la de Expuestos.
        En una enfermedad vírica como la COVID-19, el proceso de transmisión suele iniciarse mediante la inoculación de un pequeño número de patógenos.
        Sigue un periodo en el que el virus se reproduce rápidamente, bajo el radar del sistema inmune.
        Durante ese periodo la concentración del virus es demasiado baja para que la persona que lo ha contraído lo transmita  por la vías más frecuentes y por tanto, todavía no infecta a otros (por tanto no nos casa en la categoría I) pero tampoco es ya "susceptible" (puesto que ha contraído el patógeno y en consecuencia no nos cabe en la S).
        Esto nos lleva a introducir una nueva categoría, que refleje la fracción de la población que llamamos "Expuestos".
        Asociado con esta categoría tenemos un tiempo de incubación de la enfermedad, Ti, y su recíproco, la tasa de infección, \\(\\sigma = 1/Ti\\).`,
      seirModelParagraph2:
        `En el modelo SIR teníamos tres ecuaciones que describían la transición entre las categorías S, I y R.
        En el modelo SEIR, tenemos una ecuación más tal como se muestra en la figura.`,
      seirModelParagraph3:
        `En este caso, la población de S (susceptibles) disminuye a favor de la población E (expuestos) en lugar de hacerlo directamente a favor de I (infectados).
        De E a I se pasa mediante una tasa controlada por la inversa del tiempo de incubación (a medida que los expuestos alcanzan dicho tiempo se transforman en infecciosos y saltan de categoría) y de I a R se pasa mediante una tasa controlada por el tiempo de recuperación.
        SEIR se define por tanto en términos de dos parámetros que ya conocíamos, a saber, la tasa de recuperación (\\(\)\gamma  = 1/T\\), donde T es el tiempo requerido para recuperarse, o lo que es lo mismo el tiempo que se permanece infeccioso) y el producto de la tasa de contacto y la probabilidad de transmisión (\\(\\beta\\)) ---recordemos que el número de reproducción básica se obtiene a partir de estos dos, \\(R_0 = \\beta/\\gamma\\).
        A estas cantidades añadimos una tercera, la tasa de infección, \\(\sigma\\) (\\(\\sigma = 1/T_i\\), donde \\(T_i\\) es el tiempo de incubación de la enfermedad, con un valor típico de 5 días [Backer JA, Klinkenberg D, Wallinga J. The incubation period of 2019-nCoV infections among travellers from Wuhan, China. medRxiv 2020; published online Jan 28. DOI:10.1101/2020.01.27.20018986 ]).`,

      seirModelParagraph4:
        `El programa interactivo permite estudiar como evolucionan las cuatro poblaciones en función de T, \\((T_i\\) y \\(R_0\\).
        Los resultados pueden presentarse en términos de la fracción relativa de la población, o en términos absolutos, especificando el valor de la población total, N.
        También puede variarse la fracción de la población que está en cuarentena (medidas de contención).
        Si el 100 % o más de la población está en cuarentena la epidemia desaparece, mientras que para valores entre 0 y 100 % la curva se aplana (también hay controles para visualizar el tiempo total de la infección).`,

      seirModelParagraph5:
        `Como ejemplo, podemos empezar por fijar los parámetros a los siguientes valores: \\(R_0=3.5\\), \\(T = 5\\) días, \\(T_i =5\\) días. N = 47 millones (población aproximada de España), Q=0 (no hay población en cuarentena) y tf=100 (para ver bien la escala temporal).
        El modelo nos dice que el pico de la infección se alcanza hacia el día 50 y el número de infectados ese día es algo más de 800,000.
        La enfermedad necesita unos 80-90 días para agotarse, y en ese momento la mayor parte de la población se ha contagiado y se ha recuperado (recordemos que SIR cuenta las defunciones como "recuperados").`,

      seirModelParagraph6:
        `Si ahora fijamos Q a un valor intermedio (Q = 50 %) y alargamos la escala de tiempo hasta 200 días (tf = 200) vemos que la curva de infección "se aplana", el pico llega mucho más tarde (a los 120 días) y es más bajo (menos de trescientos mil infectados en el pico).
        Aún así, la fracción de la población que se infecta al final es alta (del orden del 70%, podemos verlo quitando el click de la casilla "absolute").`,

      seirModelParagraph7:
        `Para valores de Q lo bastante grandes (~70 %) podemos ver que la infección desaparece... pero no olvidar que esta versión simple del modelo no toma en cuenta un posible repunte.`,
    },
    'es': {
      seirModelParagraph1:
        `SEIR introduce una categoría más entre Susceptibles e Infectados, que es la de Expuestos.
        En una enfermedad vírica como la COVID-19, el proceso de transmisión suele iniciarse mediante la inoculación de un pequeño número de patógenos.
        Sigue un periodo en el que el virus se reproduce rápidamente, bajo el radar del sistema inmune.
        Durante ese periodo la concentración del virus es demasiado baja para que la persona que lo ha contraído lo transmita  por la vías más frecuentes y por tanto, todavía no infecta a otros (por tanto no nos casa en la categoría I) pero tampoco es ya "susceptible" (puesto que ha contraído el patógeno y en consecuencia no nos cabe en la S).
        Esto nos lleva a introducir una nueva categoría, que refleje la fracción de la población que llamamos "Expuestos".
        Asociado con esta categoría tenemos un tiempo de incubación de la enfermedad, Ti, y su recíproco, la tasa de infección, \\(\\sigma = 1/Ti\\).`,
      seirModelParagraph2:
        `En el modelo SIR teníamos tres ecuaciones que describían la transición entre las categorías S, I y R.
        En el modelo SEIR, tenemos una ecuación más tal como se muestra en la figura.`,
      seirModelParagraph3:
        `En este caso, la población de S (susceptibles) disminuye a favor de la población E (expuestos) en lugar de hacerlo directamente a favor de I (infectados).
        De E a I se pasa mediante una tasa controlada por la inversa del tiempo de incubación (a medida que los expuestos alcanzan dicho tiempo se transforman en infecciosos y saltan de categoría) y de I a R se pasa mediante una tasa controlada por el tiempo de recuperación.
        SEIR se define por tanto en términos de dos parámetros que ya conocíamos, a saber, la tasa de recuperación (\\(\)\gamma  = 1/T\\), donde T es el tiempo requerido para recuperarse, o lo que es lo mismo el tiempo que se permanece infeccioso) y el producto de la tasa de contacto y la probabilidad de transmisión (\\(\\beta\\)) ---recordemos que el número de reproducción básica se obtiene a partir de estos dos, \\(R_0 = \\beta/\\gamma\\).
        A estas cantidades añadimos una tercera, la tasa de infección, \\(\sigma\\) (\\(\\sigma = 1/T_i\\), donde \\(T_i\\) es el tiempo de incubación de la enfermedad, con un valor típico de 5 días [Backer JA, Klinkenberg D, Wallinga J. The incubation period of 2019-nCoV infections among travellers from Wuhan, China. medRxiv 2020; published online Jan 28. DOI:10.1101/2020.01.27.20018986 ]).`,

      seirModelParagraph4:
        `El programa interactivo permite estudiar como evolucionan las cuatro poblaciones en función de T, \\((T_i\\) y \\(R_0\\).
        Los resultados pueden presentarse en términos de la fracción relativa de la población, o en términos absolutos, especificando el valor de la población total, N.
        También puede variarse la fracción de la población que está en cuarentena (medidas de contención).
        Si el 100 % o más de la población está en cuarentena la epidemia desaparece, mientras que para valores entre 0 y 100 % la curva se aplana (también hay controles para visualizar el tiempo total de la infección).`,

      seirModelParagraph5:
        `Como ejemplo, podemos empezar por fijar los parámetros a los siguientes valores: \\(R_0=3.5\\), \\(T = 5\\) días, \\(T_i =5\\) días. N = 47 millones (población aproximada de España), Q=0 (no hay población en cuarentena) y tf=100 (para ver bien la escala temporal).
        El modelo nos dice que el pico de la infección se alcanza hacia el día 50 y el número de infectados ese día es algo más de 800,000.
        La enfermedad necesita unos 80-90 días para agotarse, y en ese momento la mayor parte de la población se ha contagiado y se ha recuperado (recordemos que SIR cuenta las defunciones como "recuperados").`,

      seirModelParagraph6:
        `Si ahora fijamos Q a un valor intermedio (Q = 50 %) y alargamos la escala de tiempo hasta 200 días (tf = 200) vemos que la curva de infección "se aplana", el pico llega mucho más tarde (a los 120 días) y es más bajo (menos de trescientos mil infectados en el pico).
        Aún así, la fracción de la población que se infecta al final es alta (del orden del 70%, podemos verlo quitando el click de la casilla "absolute").`,

      seirModelParagraph7:
        `Para valores de Q lo bastante grandes (~70 %) podemos ver que la infección desaparece... pero no olvidar que esta versión simple del modelo no toma en cuenta un posible repunte.`,
    }
};

export default messages;

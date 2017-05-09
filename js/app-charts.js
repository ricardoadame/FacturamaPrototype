var sm = '640px';

$(function () {
    //Se crea la grafica 1:
    createChartDonut('#chart-1', [25, 75], ['25%', '75%']);

    //Se crea la grafica 2:
    createChartDonut('#chart-2', [40, 60], ['40%', '60%']);

    // Labels y 3 series de datos
    var data = {
        //Labels meses:
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        series: [
            //Gastos:
            [0, 1, 2, 1, 2, 3, 4, 2, 4, 2, 4, 1],
            //Ingresos
            [4, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 2]
        ]
    };

    // Opciones:
    var options = {
        // Configuración del eje x:
        axisX: {
            // Deshabilita las lineas verticales de la gráfica:
            showGrid: false,
        },
        // Configuración del eje y:
        axisY: {
            // Padding entre labels y eje y
            offset: 60,
            // Devuelve el valor del label en base a la serie anexando el signo de $,
            //en este caso que se trata de cantidades monetarias:
            labelInterpolationFnc: function (value) {
                return '$' + value + 'm';
            }
        }
    };

    var responsiveOptions = [
        ['screen and (max-width:'+ sm +')', {
            axisY: {
                // Deshabilita el padding de labels
                offset: 0
            }
        }]
    ];

    // Se pasan las opciones a la grafica 3:
    new Chartist.Line('#chart-3', data, options, responsiveOptions);


    // Our labels and three data series
    var dataInv = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        series: [
            //Emitidas:
            [0, 1, 2, 1, 2, 3, 4, 2, 4, 2, 4, 1],
            //Recibidas
            [2, 2, 1, 4, 2, 3, 4, 2, 2, 1, 2, 2]
        ]
    };

    // We are setting a few options for our chart and override the defaults
    var optionsInv = {
        // Configuración del eje x:
        axisX: {
            // Deshabilita las lineas verticales de la gráfica:
            showGrid: false,
        },
        // Configuración del eje y:
        axisY: {
            // Padding entre labels y eje y
            offset: 60,
            // Devuelve el valor del label en base a la serie
            labelInterpolationFnc: function (value) {
                return value + 'm';
            }
        }
    };

    // Se pasan las opciones a la grafica 4:
    new Chartist.Line('#chart-4', dataInv, optionsInv, responsiveOptions);
})


//Crea los charts circulares:

function createChartDonut(id, s, l) {
    var chart = new Chartist.Pie(id, {
        series: s,
        labels: l
    }, {
            donut: true,
            showLabel: true
        });
}

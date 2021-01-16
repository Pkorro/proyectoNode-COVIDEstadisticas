const country = require('./pais/pais');

const argv = require('yargs').options({
    pais: {
        alias: 'p',
        desc: 'Estadisticas por Pais',
        demand: true
    }
}).argv;

const Estadisticas = async ( pais ) => {

    try {
        const covid = await country.getEstadisticas(pais);
        return `Las estadisticas de COVID para ${pais} son ${covid.casosNuevos} casos nuevos y ${covid.muertesDia} muertos con esto van ${covid.casosTotales} casos totales y ${covid.muertesTotales} muertos totales en un pais de ${covid.poblacion} numero de habitantes`
    } catch(e) {
        return `No se encontraron estadisticas para el pais ${pais}`;
    }

}


Estadisticas(argv.pais)
       .then( console.log )
       .catch(console.log);
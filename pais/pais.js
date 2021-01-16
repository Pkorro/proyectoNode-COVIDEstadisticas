const axios = require("axios");

const getEstadisticas = async( pais ) => {

    const encodedUlr = encodeURI(pais);
    
    const instance = axios.create({
      baseURL: `https://covid-193.p.rapidapi.com/statistics?country=${pais}`,
      headers: {
        'x-rapidapi-key': '4acd954bc6mshd75f25f62602469p1f5c97jsnf3733cd52b92'
      }
    });

    const resp = await instance.get();

    if (resp.data.response.length === 0) {
        throw new Error(`No hay resultados para el pais ${pais}`);
    }
   
    const data = resp.data.response[0];
    const poblacion = data.population;
    const casosNuevos = data.cases.new;
    const casosTotales = data.cases.total;
    const muertesDia = data.deaths.new;
    const muertesTotales = data.deaths.total;
    

    return {
       poblacion,
       casosNuevos,
       casosTotales,
       muertesDia,
       muertesTotales
    
    }

}


module.exports = {
    getEstadisticas
}
import fetch from 'node-fetch';
// Api Rest para obtener tipo de cambio de dolar estadounidense (USD) a sol (PEN) de sunat.
// Datos
const token = 'apis-token-1.aTSI1U7KEuT-6bbbCguH-4Y8TI6KS73N';
const fecha = '2023-03-07';

// Iniciar llamada a API
const url = 'https://api.apis.net.pe/v1/tipo-cambio-sunat?fecha=' + fecha;
const options = {
  method: 'GET',
  headers: {
    'Referer': 'https://apis.net.pe/tipo-de-cambio-sunat-api',
    'Authorization': 'Bearer ' + token
  }
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Datos listos para usar
    const tipoCambioSunat = data;
    console.log(tipoCambioSunat);
  })
  .catch(error => console.error(error));

const fromApiResponse = (apiResponse) => {
  const response = apiResponse;
  const data = response.Respuesta;

  //console.log(data);
  if (Array.isArray(data)) {
    const contests = data.map((item) => {
      return {
        // ...item,
        comprobante: item.Comprobante,
        concepto: item.conceptoPublicacion,
        area: item.descripcionArea,
        fecha: item.fechaApertura,
      };
    });
    return contests;
  }
  return [];
};

export function getNextPriceContestApi() {
  //const apiURL = `https://app.riocuarto.gov.ar:8443/GesMun/rest/ConPrePubAPI`; // OLD
  const apiURL = `https://sismunpub.riocuarto.gov.ar/rest/ConPrePubAPI`; // NEW

  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'OAuth de7e431a-f3e2-4749-9c91-2197dfe0be72!bdc044991e7721ed4aa1b0071ac12215f4cdde21510e78636309cea8adc7d24fe680836cc71901',
    },
  })
    .then(async (res) => {
      // Usamos async para usar await y obtener el texto
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const text = await res.text(); // 1. Obtiene la respuesta como texto
      if (!text || text.trim() === '') {
        // 2. Si está vacío, lanza un error que será capturado por el .catch()
        throw new Error('API response body is empty or null.');
      }
      try {
        // 3. Intenta parsear el texto a JSON
        return JSON.parse(text);
      } catch (e) {
        // 4. Si falla, el cuerpo de la respuesta NO era un JSON válido.
        console.error('Failed to parse JSON. Received text:', text);
        throw new Error('Invalid JSON received from API.');
      }
    })
    .then(fromApiResponse)
    .catch((error) => {
      console.error(`Error en la llamada a getNextPriceContestApi: ${error.message}`);
      // Si recibes "API response body is empty or null." o "Invalid JSON received from API.",
      // sabemos que la API no envió el JSON correcto.
      return [];
    });
}

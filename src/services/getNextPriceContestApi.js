const fromApiResponse = (apiResponse) => {
  const response = apiResponse;
  const data = response.Respuesta;

  //console.log(data);
  if (Array.isArray(data)) {
    const contests = data.map((item) => {
      return {
        ...item,
        // 'comprobante': item.Comprobante,
        // 'date': item.Concepto Publicación,
      };
    });
    return contests;
  }
  return [];
};

export function getNextPriceContestApi() {
  const apiURL = `https://app.riocuarto.gov.ar:8443/GesMun/rest/ConPrePubAPI`;

  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'OAuth de7e431a-f3e2-4749-9c91-2197dfe0be72!bdc044991e7721ed4aa1b0071ac12215f4cdde21510e78636309cea8adc7d24fe680836cc71901',
    },
  })
    .then((res) => res.json())
    .then(fromApiResponse)
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

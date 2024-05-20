const today = Date.now();

function dateFilter(date) {
  const expirationDate = Date.parse(date.expiration);
  return expirationDate >= today;
}

const fromApiResponseToNextOpening = (apiResponse) => {
  const data = apiResponse;
  if (Array.isArray(data)) {
    const openings = data.map((opening) => {
      return {
        //...opening,
        id: opening.ID_COTIZACION,
        number: opening.NRO_COTIZACION,
        jurisdiction: opening.NOMBRE_JUR,
        status: opening.DESCRIPCION_ESTADO,
        object: opening.Especificaciones.OBJETO_CONTRATACION,
        start_date: opening.Especificaciones.FECHA_INICIO_SUBASTA,
        start_hour: opening.Especificaciones.HORA_INICIO_SUBASTA,
        end_date: opening.Especificaciones.FECHA_FIN_SUBASTA,
        end_hour: opening.Especificaciones.HORA_FIN_SUBASTA,
        expiration: opening.Especificaciones.FECHA_FINALIZACION_SUBASTA,
        type: opening.TipoCont.DESCRIPCION,
      };
    });

    // sort by date
    openings.sort(function (a, b) {
      return new Date(a.start_date) - new Date(b.start_date);
    });

    //console.log(openings);

    // filter openings by date
    const filteredOpeningsByDate = openings.filter(dateFilter);

    return filteredOpeningsByDate;
  }
  return [];
};

export async function getNextOpening() {
  const apiURL = `https://www.seitrasus.com/subastasapi/api/Cotizaciones/Buscar?IdVigencia=210&Nro=&codigoJur=10&fechaI=&fechaF=&NroExpte=`;

  // return await fetch(apiURL)
  //   .then((res) => res.json())
  //   .then((response) => {
  //     //console.log(response);
  //     return response;
  //   });

  return await fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToNextOpening);
}

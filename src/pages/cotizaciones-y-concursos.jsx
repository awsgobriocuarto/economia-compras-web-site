import CtaPricing from '@components/CtaPricing';
import ListOfBanners from '@components/ListOfBanners';
import NextOpening from '@components/NextOpening';
import getListItems from '@services/getListItems';

export default function CotizacionesConcursos({ items }) {
  return (
    <section>
      <div className="container">
        <h1>Cotizaciones y Concursos</h1>
        <ListOfBanners items={items} />
        <NextOpening />
        <hr />
        <div className="row mb-5">
          <div className="col-md-5">
            <h5>¿Qué es el Concurso de Precios?</h5>
            <p>
              El Concurso de Precios es una modalidad de contratación en donde a partir de la necesidad de adquirir bienes y servicios por parte del Estado Municipal se invita a los proveedores
              inscripto en el Registro de Contratistas del Estado a cotizar sus ofertas, siendo adjudicado quien presente la oferta más conveniente a criterio del Municipio.
            </p>
            <p>Ud. conocerá las especificaciones necesarias para la exacta identificación de la provisión del bien o prestación del servicio y el plazo para la presentación de ofertas.</p>
            <p></p>
          </div>
          <div className="col-md-5">
            <h5>¿Qué es la Subasta Pública Inversa?</h5>
            <p>
              La subasta inversa es un proceso de compra pública en tiempo real en donde los proveedores a través de compulsas de precio en la fecha y franja horaria establecidas con anterioridad por
              el Municipio, ofrecen los bienes o servicios requeridos
            </p>
            <p>Para participar, simplemente ingresá en nuestro sitio web, regístrate y presenta tu oferta; vas a competir en tiempo real con otros ofertantes</p>
          </div>
        </div>
        <CtaPricing />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('cotizaciones-y-concursos'));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

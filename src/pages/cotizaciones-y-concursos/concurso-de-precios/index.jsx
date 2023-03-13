import CtaPricing from '@components/CtaPricing';
import ListOfBanners from '@components/ListOfBanners';
// import NextOpening from '@components/NextOpening';
import getListItems from '@services/getListItems';

export default function ConsursoDePrecios({ items }) {
  return (
    <section>
      <div className="container">
        <h1>Concurso de Precios</h1>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h5>¿Qué es el Concurso de Precios?</h5>
            <p>
              El Concurso de Precios es una modalidad de contratación en donde a partir de la necesidad de adquirir bienes y servicios por parte del Estado Municipal se invita a los proveedores
              inscripto en el Registro de Contratistas del Estado a cotizar sus ofertas, siendo adjudicado quien presente la oferta más conveniente a criterio del Municipio.
            </p>
            <p>Ud. conocerá las especificaciones necesarias para la exacta identificación de la provisión del bien o prestación del servicio y el plazo para la presentación de ofertas.</p>
          </div>
          <div className="col-md-5">
            <ListOfBanners items={items} col="col-md-12" />
          </div>
        </div>
        {/* <NextOpening title={true} text="Consurso de Precios" urlStatus={false} /> */}
        <CtaPricing />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('concurso-de-precios'));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

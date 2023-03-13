import CtaPricing from '@components/CtaPricing';
import ListOfBanners from '@components/ListOfBanners';
import NextOpening from '@components/NextOpening';
import getListItems from '@services/getListItems';

export default function SubastaPublica({ items }) {
  return (
    <section>
      <div className="container">
        <h1>Subasta Publica</h1>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h5>¿Qué es la Subasta Pública Inversa?</h5>
            <p>
              La subasta inversa es un proceso de compra pública en tiempo real en donde los proveedores a través de compulsas de precio en la fecha y franja horaria establecidas con anterioridad por
              el Municipio, ofrecen los bienes o servicios requeridos
            </p>
            <p>Para participar, simplemente ingresá en nuestro sitio web, regístrate y presenta tu oferta; vas a competir en tiempo real con otros ofertantes</p>
          </div>
          <div className="col-md-5">
            <ListOfBanners items={items} col="col-md-12" />
          </div>
        </div>
        <NextOpening title={false} text="Subasta Pública" urlStatus={false} />
        <CtaPricing />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('subasta-publica'));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

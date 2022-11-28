import CtaPricing from '@components/CtaPricing';
import ListOfBanners from '@components/ListOfBanners';
import getListItems from '@services/getListItems';

export default function CotizacionesConcursos({ items }) {
  return (
    <section>
      <div className="container">
        <h1>Cotizaciones y Concursos</h1>
        <div className="row">
          <ListOfBanners items={items} />
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

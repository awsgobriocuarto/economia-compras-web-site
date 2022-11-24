import ListOfBanners from '@components/ListOfBanners';
import getListItems from '@services/getListItems';
import Link from 'next/link';

export default function CotizacionesConcursos({ items }) {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Cotizaciones y Concursos</h1>
        <div className="row mb-5">
          <ListOfBanners items={items} />
        </div>
        <Link href="https://economiariocuarto.gob.ar/">
          <a target="_blank" rel="noopener noreferrer" className="btn btn-ls btn-primary">
            ¿Querés Participar?
          </a>
        </Link>
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

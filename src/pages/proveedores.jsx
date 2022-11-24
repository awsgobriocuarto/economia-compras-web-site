import CtaProvider from '@components/CtaProvider';
import ListOfBanners from '@components/ListOfBanners';
import getListItems from '@services/getListItems';

export default function Proveedores({ items }) {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Proveedores</h1>
        <div className="row mb-5">
          <ListOfBanners items={items} />
        </div>
      </div>
      <CtaProvider />
    </section>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('proveedores'));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

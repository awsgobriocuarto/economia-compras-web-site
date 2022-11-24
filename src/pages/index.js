import CtaProvider from '@components/CtaProvider';
import ListOfBanners from '@components/ListOfBanners';
import PostsLatest from '@components/PostsLatest';
import Slides from '@components/Slides';
import getListItems from '@services/getListItems';
import Head from 'next/head';

export default function Home({ items }) {
  //console.log(items);
  return (
    <>
      <Head>
        <title>Compras Web | Sec. de Economía Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slides />
      <ListOfBanners items={items} />
      <CtaProvider />
      <PostsLatest limit={4} />
      <div className="bg-light text-center py-5 mb-5">
        <div className="container">
          <h3>contacto</h3>
          <p className="lead mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laborum.</p>
        </div>
      </div>
      <div className="bg-light text-center py-5">
        <div className="container">
          <h3>Próximas Aperturas</h3>
          <p className="lead mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, corporis.</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('home'));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

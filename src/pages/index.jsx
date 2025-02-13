import Head from 'next/head';
import CtaProvider from '@components/CtaProvider';
import ListOfBanners from '@components/ListOfBanners';
import NextOpening from '@components/NextOpening';
import PostsLatest from '@components/PostsLatest';
import Slides from '@components/Slides';
import getListItems from '@services/getListItems';
import Contact from '@components/Contact';
import NextPriceContest from '@components/NextPriceContest';
import CtaSuggestions from '@components/CtaSuggestions';

export default function Home({ items }) {
  // console.log(items);
  return (
    <>
      <Head>
        <title>Compras Web | Sec. de Economía Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slides />
      <div className="container">
        <CtaProvider />
      </div>
      <div className="pt-4">
        <ListOfBanners items={items} />
      </div>
      <NextOpening limit={3} title={true} btnMoreStatus={true} urlRegisterStatus={true} />
      <NextPriceContest limit={3} title={true} btnMoreStatus={true} urlRegisterStatus={true} />
      <div className="container">
        <CtaSuggestions />
      </div>
      <PostsLatest limit={4} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa6arjSPTARv_IvyKV7idSiLjb0DnOx48ewD0qvwuRlxEuu86yDYYdfn1aENbhj0ooIk9gsCoSL4d2/pub?output=csv';

  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes('home'));

  // const sheetId = '1i8V1Umifjucb_qCcipGRlghDnB-LFPkst8P0B81w5Iw';
  // const sheet = 'Data2';

  // const foo = await getSheetData({ sheetId, sheet });

  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

import DownloadItemGroup from '@components/DownloadItemGroup';
import fetchNormatives from '@services/fetchNormatives';

export default function Normativa({ items }) {
  return (
    <section>
      <div className="container">
        <h1>Normativa</h1>
        <div className="downloads">
          <DownloadItemGroup items={items} />
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetchNormatives.list();
  const items = response;
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}

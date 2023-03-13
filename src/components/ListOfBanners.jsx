import BannerItem from './BannerItem';

export default function ListOfBanners({ items, col }) {
  return (
    <div className="container">
      <div className="banner-list">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className={col ? col : 'col-md-4'}>
              <BannerItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import BannerItem from './BannerItem';

export default function ListOfBanners({ items }) {
  //console.log(items);
  return (
    <div className="container">
      <div className="py-5">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <BannerItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

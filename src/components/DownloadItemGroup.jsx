import DownloadItem from './DownloadItem';

export default function DownloadItemGroup({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <DownloadItem key={item.title} title={item.title} url={item.url} status={item.status} />
      ))}
    </ul>
  );
}

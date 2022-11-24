import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BannerItem({ item }) {
  const router = useRouter();
  const handleEventClick = (button = '') => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'custom.gtm.buttonClicked',
      category: 'clicks',
      button: button,
      path: router.pathname,
    });
  };
  return (
    <Link href={item.url ? item.url : '/'} passHref>
      <a href="replace" target={item.urlExternal ? '_blank' : '_self'} className="banner animate__animated animate__fadeIn" onClick={() => handleEventClick(item.title)}>
        <div className="banner-item">
          <div className="icon">
            <i className={`fas fa-2x ${item.iconUrl}`}></i>
          </div>
          <p>{item.title}</p>
        </div>
      </a>
    </Link>
  );
}

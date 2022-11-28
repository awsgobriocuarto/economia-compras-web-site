import Link from 'next/link';

export default function Cta({ title, text, cta, url, urlExternal = false }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-body">
          <div className="cta-title">{title}</div>
          <p className="cta-text">{text}</p>
        </div>
        <div className="cta-button">
          {urlExternal ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-primary text-white">
              {cta}
            </a>
          ) : (
            <Link href={url}>
              <a className="btn btn-lg btn-primary text-white">{cta}</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

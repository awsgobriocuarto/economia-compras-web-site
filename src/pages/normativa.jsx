import Link from 'next/link';

const items = [
  { id: 1, title: 'Normativa 1', path: 'https://economiariocuarto.gob.ar/' },
  { id: 2, title: 'Normativa 2', path: 'https://economiariocuarto.gob.ar/' },
  { id: 3, title: 'Normativa 3', path: 'https://economiariocuarto.gob.ar/' },
  { id: 4, title: 'Normativa 4', path: 'https://economiariocuarto.gob.ar/' },
  { id: 5, title: 'Normativa 5', path: 'https://economiariocuarto.gob.ar/' },
  { id: 6, title: 'Normativa 6', path: 'https://economiariocuarto.gob.ar/' },
];

export default function Normativa() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Normativa</h1>
        <div className="row mb-5">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <Link href={item.path}>
                <a target="_blank" rel="noopener noreferrer" className="btn btn-link p-0 mb-4">
                  <img src={`https://via.placeholder.com/800x300.png?text=${item.title}`} alt={item.title} className="img-fluid" />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

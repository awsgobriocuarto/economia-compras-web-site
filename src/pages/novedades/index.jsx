import Link from 'next/link';

const items = [
  { id: 1, title: 'Novedad 1', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 2, title: 'Novedad 2', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 3, title: 'Novedad 3', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 4, title: 'Novedad 4', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 5, title: 'Novedad 5', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 6, title: 'Novedad 6', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
];

function Novedades() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Novedades</h1>
        <div className="row mb-5">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <Link href={item.path}>
                <a className="btn btn-link p-0 mb-4">
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

export default Novedades;

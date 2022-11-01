import NewsCard from '@components/NewsCard';
import Slides from '@components/Slides';
import Link from 'next/link';

const buttons = [
  { id: 1, title: 'Cotizaciones y Concursos', path: '/cotizaciones-y-concursos' },
  { id: 2, title: 'proveedores', path: '/proveedores' },
  { id: 3, title: 'normativa', path: '/normativa' },
];
const posts = [
  { id: 1, title: 'post 1', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 2, title: 'post 2', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 3, title: 'post 3', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
  { id: 4, title: 'post 4', path: './novedades/rio-cuarto-integrara-la-mesa-directiva-de-la-red-argentina-del-pacto-global-1666912216?id=114' },
];
export default function Home() {
  return (
    <>
      <Slides />
      <div className="container">
        <div className="text-center py-5 mb-5">
          <div className="row">
            {buttons.map((button) => (
              <div key={button.id} className="col-md-4">
                <Link href={button.path}>
                  <a className="btn btn-link p-0 mb-4">
                    <img src={`https://via.placeholder.com/800x300.png?text=${button.title}`} alt={button.title} className="img-fluid" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <h3>novedades</h3>
        <div className="text-center py-5 mb-5">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-md-3">
                <NewsCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
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

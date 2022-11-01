import Link from 'next/link';

const items = [
  { id: 1, title: 'Subasta Pública', path: 'https://economiariocuarto.gob.ar/' },
  { id: 2, title: 'Concurso de Precios', path: 'https://economiariocuarto.gob.ar/' },
];

export default function CotizacionesConcursos() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Cotizaciones y Concursos</h1>
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
        <Link href="https://economiariocuarto.gob.ar/">
          <a target="_blank" rel="noopener noreferrer" className="btn btn-ls btn-primary">
            ¿Querés Participar?
          </a>
        </Link>
      </div>
    </section>
  );
}

import Link from 'next/link';

const items = [
  { id: 1, title: 'Modificación de Datos', path: 'https://economiariocuarto.gob.ar/' },
  { id: 2, title: 'Carga de Facturas', path: 'https://economiariocuarto.gob.ar/' },
  { id: 3, title: 'Pagos', path: 'https://economiariocuarto.gob.ar/' },
  { id: 4, title: 'Consultar Retenciones', path: 'https://economiariocuarto.gob.ar/' },
];

export default function Proveedores() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5 mt-3">Proveedores</h1>
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
            ¿Querés ser Proveedor?
          </a>
        </Link>
      </div>
    </section>
  );
}

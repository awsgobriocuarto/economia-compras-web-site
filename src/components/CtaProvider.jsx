import Link from 'next/link';

export default function CtaProvider() {
  return (
    <div className="cta secondary">
      <div>
        <h3>¿Querés ser proveedor?</h3>
        <p className="lead d-none d-sm-block">Registrate a nuestra red de proveedores y participá de los concurso de precios y licitaciones</p>
      </div>
      <div>
        <Link href="/proveedores/registro">
          <a className="btn btn-primary text-white text-uppercase">Registrate Ahora</a>
        </Link>
      </div>
    </div>
  );
}

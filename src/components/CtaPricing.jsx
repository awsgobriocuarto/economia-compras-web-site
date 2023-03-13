import Link from 'next/link';

export default function CtaPricing() {
  return (
    <div className="cta secondary">
      <div>
        <h3 className="mb-3 mb-sm-0">¿Querés participar?</h3>
        <p className="lead">
          Registrate a nuestra red de proveedores y participá en los <b>Concursos de Precios</b> y <b>Subastas Públicas</b>
        </p>
      </div>
      <div>
        <Link href="/proveedores/registro">
          <a className="btn btn-primary text-white text-uppercase">Registrate Ahora</a>
        </Link>
      </div>
    </div>
  );
}

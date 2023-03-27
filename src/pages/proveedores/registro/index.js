import Contact from '@components/Contact';
import ProviderRegisterForm from '@components/ProviderRegisterForm';

export default function Registro() {
  return (
    <section>
      <div className="container">
        <h1>Registro de Proveedores</h1>
        <div className="row">
          <div className="col-md-6">
            <p className="lead">Cualquier persona que realize una actividad comercial en nuestra ciudad puede ser proveedor municipal.</p>
            <p className="mb-4">
              Si tu actividad es la <b>venta de bienes</b> o sos <b>prestador de servicios</b> y querés participar de los <b>Concursos de Precios y Subastas Públicas Municipales</b>, es necesario
              inscribirse en el Registro Municipal de Contratistas.
            </p>
            <p className="mb-4">La Secretaria de Economía ha establecido los requisitos y la documentación necesaria. </p>
            <a href="https://forms.gle/YneQ6pLaUJcmPksw6" className="btn btn-secondary btn-lg mb-4" target="_blank" rel="noopener noreferrer">
              Registrate Ahora <i className="fa-solid fa-angles-right"></i>
            </a>
            <p className="mb-4">Si querés conocer más, ingresa tus datos en el formulario y te contactaremos.</p>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Solicitá más información</h5>
                <ProviderRegisterForm />
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
}

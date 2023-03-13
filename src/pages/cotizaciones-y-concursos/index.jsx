import BannerItem from '@components/BannerItem';
import CtaPricing from '@components/CtaPricing';

const itemConcursoDePrecios = {
  title: 'Concurso de Precios',
  url: '/cotizaciones-y-concursos/concurso-de-precios',
  iconUrl: 'fa-gavel',
  urlExternal: '',
};
const itemSubastaPublica = {
  title: 'Subasta Pública',
  url: '/cotizaciones-y-concursos/subasta-publica',
  iconUrl: 'fa-gavel',
  urlExternal: '',
};

export default function CotizacionesConcursos() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-5">Cotizaciones y Concursos</h1>
        <div className="row mb-5">
          <div className="col-md-4 mb-5 mb-sm-0">
            <BannerItem item={itemConcursoDePrecios} col="col-md-2" />
            <h5>¿Qué es el Concurso de Precios?</h5>
            <p>
              El Concurso de Precios es una modalidad de contratación en donde a partir de la necesidad de adquirir bienes y servicios por parte del Estado Municipal se invita a los proveedores
              inscripto en el Registro de Contratistas del Estado a cotizar sus ofertas, siendo adjudicado quien presente la oferta más conveniente a criterio del Municipio.
            </p>
            <p>Ud. conocerá las especificaciones necesarias para la exacta identificación de la provisión del bien o prestación del servicio y el plazo para la presentación de ofertas.</p>
            <p></p>
          </div>
          <div className="col-md-4 mb-3 mb-sm-0">
            <BannerItem item={itemSubastaPublica} />
            <h5>¿Qué es la Subasta Pública Inversa?</h5>
            <p>
              La subasta inversa es un proceso de compra pública en tiempo real en donde los proveedores a través de compulsas de precio en la fecha y franja horaria establecidas con anterioridad por
              el Municipio, ofrecen los bienes o servicios requeridos
            </p>
            <p>Para participar, simplemente ingresá en nuestro sitio web, regístrate y presenta tu oferta; vas a competir en tiempo real con otros ofertantes</p>
          </div>
        </div>
        <CtaPricing />
      </div>
    </section>
  );
}

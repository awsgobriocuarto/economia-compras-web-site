import Spinner from './Spinner';
import { useNextOpening } from 'hooks/useNextOpening';
import NextOpeningCard from './NextOpeningCard';
import Link from 'next/link';

import moment from 'moment';

const today = moment().format('YYYY-MM-DD');

export default function NextOpening({ title = false, urlRegisterStatus = false, btnMoreStatus = false, limit = false }) {
  const { loading, openings } = useNextOpening();

  return (
    <div className="openings">
      <div className="container">
        {title ? <h3 className="mb-3">Subasta Pública</h3> : ''}
        <h5 className="text-uppercase mb-4">Próximas Aperturas</h5>
        <div className="row">
          {loading ? (
            <div className="col-12">
              <Spinner />
            </div>
          ) : (
            <>
              {openings?.length == 0 ? (
                <div className="col-12">
                  <div className="alert alert-primary">No hay registros publicados</div>
                </div>
              ) : (
                <>
                  {openings.slice(0, limit ? limit : openings.length).map((opening) => {
                    const expirated = moment(opening.expiration).format('YYYY-MM-DD');
                    if (today > expirated) {
                      return null;
                    }
                    return (
                      <div key={opening.id} className="col-md-4">
                        <NextOpeningCard {...opening} />
                      </div>
                    );
                  })}
                  {openings.length > 3 && btnMoreStatus ? (
                    <div className="pt-3">
                      <Link href="/cotizaciones-y-concursos/subasta-publica">
                        <a className="btn btn-sm btn-primary text-white">Ver más</a>
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}
                  {urlRegisterStatus ? (
                    <div className="pt-3">
                      ¿Querés participar? <Link href="/cotizaciones-y-concursos/subasta-publica">Ingresa acá</Link>
                    </div>
                  ) : (
                    ''
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import moment from 'moment';

import Spinner from './Spinner';
import { useNextOpening } from 'hooks/useNextOpening';
import NextOpeningCard from './NextOpeningCard';
import Link from 'next/link';

const today = moment().format('YYYY-MM-DD');

export default function NextOpening({ title = true, text = 'Economia', urlStatus = true, url = '/proveedores/registro', urlText = 'registrate aca' }) {
  const { loading, openings } = useNextOpening();

  return (
    <div className="openings">
      <div className="container">
        {title ? <h3 className="mb-3">{text}</h3> : ''}
        <h5 className="text-uppercase mb-4">Próximas Aperturas</h5>
        <div className="row">
          {loading ? (
            <div className="col-12">
              <Spinner />
            </div>
          ) : (
            <>
              {openings.length == 0 ? (
                <div className="col-12">
                  <div className="alert alert-primary">No hay registros publicados</div>
                </div>
              ) : (
                <>
                  {openings.map((opening) => {
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
                  {urlStatus ? (
                    <div className="pt-3">
                      Para participar <Link href={url}>{urlText}</Link>.
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

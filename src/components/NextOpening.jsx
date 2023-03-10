import moment from 'moment';

import Spinner from './Spinner';
import { useNextOpening } from 'hooks/useNextOpening';
import NextOpeningCard from './NextOpeningCard';
import Link from 'next/link';

const today = moment().format('YYYY-MM-DD');

export default function NextOpening() {
  const { loading, openings } = useNextOpening();
  console.log(openings.length);
  return (
    <div className="openings">
      <div className="container">
        <h3 className="text-center mb-3">Subasta Pública Inversa</h3>
        <h5 className="text-center text-uppercase mb-5">- Próximas Aperturas -</h5>
        <div className="row">
          {loading ? (
            <div className="col-12">
              <Spinner />
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
              <div className="text-center pt-3">
                Si sos proveedor de la municipaidad podes{' '}
                <a href="https://www.seitrasus.com/#!/login" target="_blank" rel="noopener noreferrer">
                  participar ahora
                </a>{' '}
                de la subasta, si aún no lo sos podes <Link href={'/proveedores/registro'}>registrarte acá</Link> de manera muy fácil.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import Spinner from './Spinner';
import NextPriceContestCard from './NextPriceContestCard';
import Link from 'next/link';

//import moment from 'moment';
import { useNextPriceContest } from 'hooks/useNextPriceContest';

//const today = moment().format('YYYY-MM-DD');

export default function NextPriceContest({ title = true, text = 'Economia', urlStatus = true, url = '/proveedores/registro', urlText = 'registrate aca' }) {
  // const { loading, openings } = useNextOpening();
  const { loading, openings } = useNextPriceContest();

  return (
    <div className="openings">
      <div className="container">
        {title ? <h3 className="mb-3">{text}</h3> : ''}
        <h5 className="text-uppercase mb-4">Concurso de Precios Vigentes</h5>
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
                  {openings?.map((opening) => {
                    // const expirated = moment(opening.expiration).format('YYYY-MM-DD');
                    // if (today > expirated) {
                    //   return null;
                    // }
                    return (
                      <div key={opening.id} className="col-md-4">
                        <NextPriceContestCard opening={opening} />
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

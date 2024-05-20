import Spinner from './Spinner';
import NextPriceContestCard from './NextPriceContestCard';
import Link from 'next/link';

import { useNextPriceContest } from 'hooks/useNextPriceContest';

export default function NextPriceContest({ title = false, urlRegisterStatus = false, btnMoreStatus = false, limit = false }) {
  const { loading, openings } = useNextPriceContest();
  console.log(openings?.length);

  if (!openings) {
    return '';
  }

  return (
    <div className="openings">
      <div className="container">
        {title ? <h3 className="mb-3">Concurso de Precios</h3> : ''}
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
                  {openings?.slice(0, limit ? limit : openings.length)?.map((opening) => {
                    return (
                      <div key={opening.id} className="col-md-4">
                        <NextPriceContestCard opening={opening} />
                      </div>
                    );
                  })}
                  {openings?.length > 3 && btnMoreStatus ? (
                    <div className="pt-3">
                      <Link href="/cotizaciones-y-concursos/concurso-de-precios">
                        <a className="btn btn-sm btn-primary text-white">Ver más</a>
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}
                  {urlRegisterStatus ? (
                    <div className="pt-3">
                      ¿Querés participar? <Link href="/cotizaciones-y-concursos/concurso-de-precios">Ingresa acá</Link>
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

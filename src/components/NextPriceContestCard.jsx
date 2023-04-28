import moment from 'moment';

export default function NextPriceContestCard({ opening }) {
  const { concepto, comprobante, area, fecha } = opening;
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{concepto}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{comprobante}</li>
        <li className="list-group-item">
          Fecha: <b>{moment(fecha).format('DD/MM/YYYY')}</b>
        </li>
        <li className="list-group-item">
          Área: <b>{area}</b>
        </li>
      </ul>
    </div>
  );
}

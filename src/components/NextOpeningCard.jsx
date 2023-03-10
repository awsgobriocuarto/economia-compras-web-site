import moment from 'moment';

export default function NextOpeningCard({ object, number, start_date, start_hour, expiration, jurisdiction, type }) {
  // const now = moment().format('YYYY-MM-DD HH:mm');
  //const todayHour = moment().format('HH:mm');

  // fix start hour
  const parseStartHour = start_hour.split(':');
  const newStartHour = parseStartHour[0];
  const newStartMinute = parseStartHour[1].length === 1 ? parseStartHour[1] + '0' : parseStartHour[1];

  // start
  const s_year = moment(start_date).format('YYYY');
  const s_month = moment(start_date).format('MM');
  const s_day = moment(start_date).format('DD');
  const s_hour = newStartHour;
  const s_minute = newStartMinute;
  const s_date = new Date(s_year, s_month - 1, s_day, s_hour, s_minute);
  // const start = moment(s_date).format('YYYY-MM-DD HH:mm');
  const startDate = moment(s_date).format('D/M/YYYY - HH:mm');
  // const startDay = moment(s_date).format('D/M/YYYY');
  // const startHour = moment(s_date).format('HH:mm');

  // end
  const e_year = moment(expiration).format('YYYY');
  const e_month = moment(expiration).format('MM');
  const e_day = moment(expiration).format('DD');
  const e_hour = moment(expiration).format('HH');
  const e_minute = moment(expiration).format('mm');
  const e_date = new Date(e_year, e_month - 1, e_day, e_hour, e_minute);
  // const end = moment(e_date).format('YYYY-MM-DD HH:mm');
  const endDate = moment(e_date).format('DD/MM/YYYY - HH:mm');
  // const endDay = moment(e_date).format('DD/MM/YYYY');
  // const endHour = moment(e_date).format('HH:mm');

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{object}</h6>
        <p className="card-text">
          Subasta <b>{number}</b>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Apertura: <b>{startDate} hs</b>
        </li>
        <li className="list-group-item">
          Cierre: <b>{endDate} hs</b>
        </li>
        <li className="list-group-item">
          Jurisdicción: <b>{jurisdiction}</b>
        </li>
        <li className="list-group-item">
          Tipo: <b>{type}</b>
        </li>
      </ul>
    </div>
  );
}

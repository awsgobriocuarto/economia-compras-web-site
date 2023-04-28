export default function NextPriceContestCard({ opening }) {
  console.log(opening);

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">Concepto Publicacion ###</h6>
        <p className="card-text">
          <small>{opening.Comprobante}</small>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Fecha: <b>### hs</b>
        </li>
        <li className="list-group-item">
          Descripcion Area: <b>###</b>
        </li>
      </ul>
    </div>
  );
}

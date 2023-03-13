import { useState } from 'react';
import { useForm } from 'hooks/useForm';

const initialValues = {
  fname: '',
  lname: '',
  email: '',
  type: '',
};

export default function ProviderRegisterForm() {
  const [values, handleInputChange, reset] = useForm(initialValues);
  const [sending, setSending] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const { fname, lname, email, type } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const results = await fetch('/api/email/sparkpost', {
      method: 'POST',
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        type: type,
      }),
    });

    if (results.status == 200) {
      console.log('success');
      setSending(false);
      setSend(true);
    } else {
      console.log('error');
      setSending(false);
      setError(true);
    }

    // setTimeout(() => {
    //   setSend(true);
    //   setSending(false);
    // }, 1000);
  };

  if (send) {
    return (
      <>
        <h3>Formulario enviado</h3>
        <p>
          Nombre:{' '}
          <b>
            {fname} {lname}
          </b>{' '}
          <br />
          Email: <b>{email}</b> <br />
          Tipo de Registro: <b>{type}</b>
        </p>
        <button
          onClick={() => {
            setSend(false);
            reset();
          }}
          className="btn btn-primary"
        >
          Volver
        </button>
      </>
    );
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="fname">Nombre</label>
            <input onChange={handleInputChange} value={fname} type="text" name="fname" placeholder="Ingresá tu Nombre" className="form-control" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="lname">Apellido</label>
            <input onChange={handleInputChange} value={lname} type="text" name="lname" placeholder="Ingresá tu Apellido" className="form-control" required />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input onChange={handleInputChange} value={email} type="email" name="email" placeholder="Ingresá tu Email" className="form-control" required />
      </div>
      <div className="row">
        <div className="col-md-6">
          <b>Indica tu situación</b>
          <div className="mb-3">
            <div className="form-check">
              <input onChange={handleInputChange} className="form-check-input" type="radio" name="type" value="general" id="type1" checked={type === 'general' ? true : false} required />
              <label className="form-check-label" htmlFor="type1">
                Persona Física (No profesional)
              </label>
            </div>
            <div className="form-check">
              <input onChange={handleInputChange} className="form-check-input" type="radio" name="type" value="profesional" id="type2" checked={type === 'profesional' ? true : false} required />
              <label className="form-check-label" htmlFor="type2">
                Persona Física (Profesional)
              </label>
            </div>
            <div className="form-check">
              <input onChange={handleInputChange} className="form-check-input" type="radio" name="type" value="juridica" id="type3" checked={type === 'juridica' ? true : false} required />
              <label className="form-check-label" htmlFor="type3">
                Persona Jurídica
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none">
          <b>Informar...</b>
          <p>{type === 'general' ? 'Info General' : type === 'profesional' ? 'Info Profesional' : type === 'juridica' ? 'Info Juridica' : ''}</p>

          {/* <textarea className="form-control" rows="2"></textarea> */}
        </div>
      </div>
      {sending ? (
        <button className="btn btn-primary text-white" disabled>
          Enviando...
        </button>
      ) : (
        <button className="btn btn-primary text-white">Enviar</button>
      )}

      {error ? <div className="alert alert-danger">error al enviar el formulario</div> : ''}
    </form>
  );
}

import React from 'react';

const contacts = [
  {
    title: 'Registro de Proveedores de Bienes y/o Servicios',
    phone: '(0358) 476 8490 | Interno 336',
    whatsapp: '',
    email: 'proveedores@riocuarto.gov.ar',
  },
  {
    title: 'Subdirección de Compras, Contrataciones y Patrimonio',
    phone: '',
    whatsapp: '+54 9 358 490 1928',
    email: '',
  },
  {
    title: 'Subsecretaría de Obras e Infraestructura',
    phone: '(0358) 4768440 | Interno 7',
    whatsapp: '',
    email: 'dptoeconomicoobraspublicas@riocuarto.gov.ar',
  },
  {
    title: 'Ente de Prevención Ciudadana y Gestión Ambiental',
    phone: '',
    whatsapp: '+54 9 358 411 2577',
    email: '',
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h3 className="mb-5">contactos</h3>
        <div className="row">
          {contacts.map((contact) => (
            <div className="col-md-6" key={contact.title}>
              <div className="contact-item">
                <h5>{contact.title}</h5>
                <ul>
                  {contact.phone ? (
                    <li>
                      Teléfono: <b>{contact.phone}</b>
                    </li>
                  ) : (
                    ''
                  )}
                  {contact.whatsapp ? (
                    <li>
                      Whatsapp: <b>{contact.whatsapp}</b>
                    </li>
                  ) : (
                    ''
                  )}
                  {contact.email ? (
                    <li>
                      Email: <b>{contact.email}</b>
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

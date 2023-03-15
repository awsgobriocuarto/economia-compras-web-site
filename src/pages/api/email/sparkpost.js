const SparkPost = require('sparkpost');

async function emailHandler(req, res) {
  const client = new SparkPost('4a234cb3191c56354c74978ce01da942589003a6');
  // const client = new SparkPost(process.env.SPARKPOST_API_KEY);
  const data = JSON.parse(req.body);
  const { fname, lname, email, type } = data;

  client.transmissions
    .send({
      content: {
        from: 'comprasweb@gobiernoriocuarto.gob.ar',
        subject: 'Registro de Proveedores',
        html: `
          <html>
            <body>
              <h3>Nueva solicitud para registro de provedoores</h3>
              <p>
                Nombre y Apeliido: <b>${fname} ${lname}</b> <br />
                Email <b>${email}</b> <br />
                Tipo: <b>${type === 'general' ? 'Persona Fisica (No Profesional)' : type === 'profesional' ? 'Persona Fisica (Profesional)' : 'Persona Jurídica'}</b>.
              </p>
            </body>  
          </html>`,
      },
      recipients: [{ address: 'gsayago@riocuarto.gov.ar' }, { address: 'proveedores@riocuarto.gov.ar' }],
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: null }));
    })
    .catch(() => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'error sending email' }));
    });
}

export default emailHandler;

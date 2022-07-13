const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getClientes = (request, response) => {
  pool.query('SELECT * FROM cliente ORDER BY documento ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};

const getClienteById = (request, response) => {
  const a = parseInt(request.params.id)

  pool.query('SELECT * FROM cliente WHERE id = $1', [a], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};


const createCliente = (request, response) => {
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_de_documento,
    documento, celular, direccion, correo_electronico, clave} = request.body

  pool.query('INSERT INTO cliente (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_de_documento, documento, celular, direccion, correo_electronico, clave) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_de_documento, documento, celular, direccion, correo_electronico, clave], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Cliente Registrado`)
  })
};

 const updateCliente = async (req, res) => { 
  const id = req.params.id;
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_de_documento, documento, celular, direccion, correo_electronico, clave} = req.body;
  const response = await pool.query('UPDATE cliente SET primer_nombre = $1, segundo_nombre = $2, primer_apellido = $3, segundo_apellido = $4, tipo_de_documento = $5, documento = $6, celular = $7, direccion = $8, correo_electronico = $9, clave = $10 WHERE id = $11', [
    primer_nombre, 
    segundo_nombre, 
    primer_apellido, 
    segundo_apellido, 
    tipo_de_documento, 
    documento, 
    celular, 
    direccion, 
    correo_electronico,
    clave,
    id
   ]);
console.log(response) 
res.json('Cliente Actualizado Satisfactoriamente');
};

const deleteCliente = (request, response) => {
  const id = parseInt(request.params.documento)

  pool.query('DELETE FROM cliente WHERE documento = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Cliente eliminado con documento: ${id}`)
  })
};



module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
}


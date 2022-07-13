
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getProdMantes = (request, response) => {
  pool.query('SELECT * FROM producto_mantenimiento ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};

const getProdManteById = (request, response) => {
  const a = parseInt(request.params.id)

  pool.query('SELECT * FROM producto_mantenimiento WHERE id = $1', [a], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createProdMante = (request, response) => {
  const {id_mantenimiento, producto, cantidad_utilizar } = request.body

  pool.query('INSERT INTO producto_mantenimiento (id_mantenimiento, producto, cantidad_utilizar ) VALUES ($1, $2, $3)', [id_mantenimiento, producto, cantidad_utilizar ], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`producto_mantenimiento Registrado`)
  })
};

 const updateProdMante = async (req, res) => { 
  const id = req.params.id;
  const { id_mantenimiento, producto, cantidad_utilizar} = req.body;
  const response = await pool.query('UPDATE producto_mantenimiento SET id_mantenimiento = $1, producto = $2, cantidad_utilizar = $3 WHERE id = $4', [
    
    id_mantenimiento, 
    producto, 
    cantidad_utilizar,
    id
   ]);
console.log(response) 
res.json('producto_mantenimiento Actualizado Satisfactoriamente');
};

const deletegetProdMante = (request, response) => {
  const b = parseInt(request.params.id)

  pool.query('DELETE FROM producto_mantenimiento WHERE id = $1', [b], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`producto_mantenimiento eliminado con id: ${b}`)
  })
};



module.exports = {
    getProdMantes,
    getProdManteById,
    createProdMante,
    updateProdMante,
    deletegetProdMante
}
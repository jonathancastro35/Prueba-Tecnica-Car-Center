
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getMantenimientos = (request, response) => {
  pool.query('SELECT * FROM mantenimiento ORDER BY vehiculo ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};

const getMantenimientoById = (request, response) => {
  const a = parseInt(request.params.id)

  pool.query('SELECT * FROM mantenimiento WHERE id = $1', [a], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};


const createMantenimiento = (request, response) => {
  const {id_mantenimiento, vehiculo, estado} = request.body

  pool.query('INSERT INTO mantenimiento (id_mantenimiento, vehiculo, estado) VALUES ($1, $2, $3)', [id_mantenimiento, vehiculo, estado], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Mantenimiento Registrado`)
  })
};

 const updateMantenimiento = async (req, res) => { 
  const id = req.params.id;
  const { id_mantenimiento, vehiculo, estado } = req.body;
  const response = await pool.query('UPDATE mantenimiento SET id_mantenimiento = $1, vehiculo = $2, estado = $3 WHERE id = $4', [
    
    id_mantenimiento, 
    vehiculo, 
    estado, 
    id
   ]);
console.log(response) 
res.json('Mantenimiento Actualizado Satisfactoriamente');
};

const deleteMantenimiento = (request, response) => {
  const b = parseInt(request.params.id)

  pool.query('DELETE FROM mantenimiento WHERE id = $1', [b], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Mantenimiento eliminado con id: ${b}`)
  })
};



module.exports = {
  getMantenimientos,
  getMantenimientoById,
  createMantenimiento,
  updateMantenimiento,
  deleteMantenimiento
}



const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getSermanapomecas = (request, response) => {
  pool.query('SELECT * FROM servicio_mantenimiento_apoyomecanico ORDER BY servicio ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};

const getSermanapomecaById = (request, response) => {
  const a = parseInt(request.params.id)

  pool.query('SELECT * FROM servicio_mantenimiento_apoyomecanico WHERE id = $1', [a], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};


const createSermanapomeca = (request, response) => {
  const {servicio, mantenimiento, mecanico} = request.body

  pool.query('INSERT INTO servicio_mantenimiento_apoyomecanico (servicio,mantenimiento,mecanico) VALUES ($1, $2, $3)', [servicio, mantenimiento, mecanico], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`servicio_mantenimiento_apoyomecanico Registrado`)
  })
};

 const updateSermanapomeca = async (req, res) => { 
  const id = req.params.id;
  const { servicio, mantenimiento, mecanico} = req.body;
  const response = await pool.query('UPDATE servicio_mantenimiento_apoyomecanico SET servicio = $1, mantenimiento = $2, mecanico = $3 WHERE id = $4', [
    
    servicio, 
    mantenimiento, 
    mecanico,
    id
   ]);
console.log(response) 
res.json('servicio_mantenimiento_apoyomecanico Actualizado Satisfactoriamente');
};

const deleteSermanapomeca = (request, response) => {
  const b = parseInt(request.params.id)

  pool.query('DELETE FROM servicio_mantenimiento_apoyomecanico WHERE id = $1', [b], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`servicio_mantenimiento_apoyomecanico eliminado con id: ${b}`)
  })
};



module.exports = {
  getSermanapomecas,
  getSermanapomecaById,
  createSermanapomeca,
  updateSermanapomeca,
  deleteSermanapomeca
}
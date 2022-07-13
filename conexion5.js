
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getServicios = (request, response) => {
  pool.query('SELECT * FROM servicio ORDER BY id_servicio ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};


module.exports = {
    getServicios
}
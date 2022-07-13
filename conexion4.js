
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getMecanicos = (request, response) => {
  pool.query('SELECT * FROM mecanico ORDER BY documento ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};


module.exports = {
    getMecanicos
}
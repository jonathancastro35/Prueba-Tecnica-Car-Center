
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexion',
  password: 'admin',
  port: 5432,
})

const getVehiculos = (request, response) => {
  pool.query('SELECT * FROM vehiculo ORDER BY dueño ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};

const getVehiculoById = (request, response) => {
  const a = parseInt(request.params.id)

  pool.query('SELECT * FROM vehiculo WHERE id = $1', [a], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

 
const createVehiculo = (request, response) => {
  const { placa, dueño, presuarrevehiculo} = request.body

  pool.query('INSERT INTO vehiculo (placa, dueño, presuarrevehiculo) VALUES ($1, $2, $3)', [placa, dueño, presuarrevehiculo], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Vehiculo Registrado`)
  })
};



 const updateVehiculo = async (req, res) => { 
  const id = req.params.id;
  const { placa, dueño, presuarrevehiculo, fecha_registro_carro} = req.body;
  const response = await pool.query('UPDATE vehiculo SET placa = $1, dueño = $2, presuarrevehiculo = $3, fecha_registro_carro = $4 WHERE id = $5', [
    placa,
    dueño,
    presuarrevehiculo,
    fecha_registro_carro,
    id
   ]);
console.log(response) 
res.json('Vehiculo Actualizado Satisfactoriamente');
};

const deleteVehiculo = (request, response) => {
  const b = parseInt(request.params.id)

  pool.query('DELETE FROM vehiculo WHERE id = $1', [b], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Vehiculo eliminado con id: ${b}`)
  })
};



module.exports = {
  getVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
}


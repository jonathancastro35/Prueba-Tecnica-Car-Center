const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();

const db = require('./conexion')
const db2 = require('./conexion2')
const db3 = require('./conexion3')
const db4 = require('./conexion4')
const db5 = require('./conexion5')
const db6 = require('./conexion6')
const db7 = require('./conexion7')
const db8 = require('./conexion8')

const port = 8002

app.use(cors())


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, y Postgres en API' })
  })
  
app.post('/CrearCliente/', db.createCliente);
app.get('/Clientes', db.getClientes);
app.get('/Cliente/:id', db.getClienteById);
app.put('/ActualizarCliente/:id', db.updateCliente);
app.delete('/EliminarCliente/:documento', db.deleteCliente);

app.post('/CrearVehiculo/', db2.createVehiculo);
app.get('/Vehiculos', db2.getVehiculos);
app.get('/Vehiculo/:id', db2.getVehiculoById);
app.put('/ActualizarVehiculo/:id', db2.updateVehiculo);
app.delete('/EliminarVehiculo/:id', db2.deleteVehiculo);

app.post('/CrearMantenimiento/', db3.createMantenimiento);
app.get('/Mantenimientos', db3.getMantenimientos);
app.get('/Mantenimiento/:id', db3.getMantenimientoById);
app.put('/ActualizarMantenimiento/:id', db3.updateMantenimiento);
app.delete('/EliminarMantenimiento/:id', db3.deleteMantenimiento);

app.get('/Mecanicos', db4.getMecanicos);
app.get('/Servicios', db5.getServicios);
app.get('/Productos', db7.getProductos);

app.post('/CrearServicio_Mantenimiento_Apoyomecanico/', db6.createSermanapomeca);
app.get('/Servicio_Mantenimiento_Apoyomecanicos', db6.getSermanapomecas);
app.get('/Servicio_Mantenimiento_Apoyomecanico/:id', db6.getSermanapomecaById);
app.put('/ActualizarServicio_Mantenimiento_Apoyomecanico/:id', db6.updateSermanapomeca);
app.delete('/EliminarServicio_Mantenimiento_Apoyomecanico/:id', db6.deleteSermanapomeca);

app.post('/CrearProducto_mantenimiento/', db8.createProdMante);
app.get('/Producto_mantenimientos', db8.getProdMantes);
app.get('/Producto_mantenimiento/:id', db8.getProdManteById);
app.put('/ActualizarProducto_Mantenimiento/:id', db8.updateProdMante);
app.delete('/EliminarProducto_Mantenimiento/:id', db8.deletegetProdMante);



  app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}.`)
  })
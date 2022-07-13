import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion';

import InsertarCliente from './Componentes/cliente'
import ListarCliente from './Componentes/ListarCliente'
import EditarCliente from './Componentes/cliente'
import RegistrarVehiculo from './Componentes/vehiculo'
import ListarVehiculo from './Componentes/Listarvehiculo'
import EditarVehiculo from './Componentes/vehiculo'
import RegistrarMantenimiento from './Componentes/mantenimiento'
import ListarMantenimiento from './Componentes/ListarMantenimiento'
import EditarMantenimiento from './Componentes/mantenimiento'
import RegistrarServicioMecanicoVehiculo from './Componentes/servicio_mantenimiento_apoyomecanico'
import ListarServicioMecanicoVehiculo from './Componentes/Listar_serv_mant_apomec'
import EditarServicioMantenimientoApoyoMecanico from './Componentes/servicio_mantenimiento_apoyomecanico'
import RegistrarProductoMantenimiento from './Componentes/producto_mantenimiento'
import ListarProductoMantenimiento from './Componentes/listarproductomantenimiento'
import EditarProducto_Mantenimiento from './Componentes/producto_mantenimiento'
import PlacaRepetidaVehiculo from './Componentes/placarepetidavehiculo'
import IdentificacionMantenimiento from './Componentes/Idmantenimientorepetido'
import ServicioAsociadoVehiculo from './Componentes/ErrorServicioMantenimiento'
import ErrorVehiculoProductoMantenimiento from './Componentes/ErrorVehiculoProductoMantenimiento'
import GenerarFactura from './Componentes/factura1'
import BuscarVehiculosCliente from './Componentes/factura2'
import GenerarFacturaProducto from './Componentes/factura3'
import ListarVehiculosCliente from './Componentes/ListarVehiculosCliente'
import IngresarClienteDocumento from './Componentes/IngresoClientes'
import ClientenoRegistrado from './Componentes/ClientenoRegistrado'
import ErrorFacturacionc from './Componentes/ErrorFacturacionc'
import ErrorTerminadoNoTerminado from './Componentes/Mantenimientonoterminado'

function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">

        <Route path="/InsertarCliente" component={InsertarCliente} />
        <Route path="/ListarCliente" component={ListarCliente} />
        <Route path="/EditarCliente/:id" component={EditarCliente} />

        <Route path="/RegistrarVehiculo" component={RegistrarVehiculo} />
        <Route path="/ListarVehiculo" component={ListarVehiculo} />
        <Route path="/EditarVehiculo/:id" component={EditarVehiculo} />

        <Route path="/RegistrarMantenimiento" component={RegistrarMantenimiento} />
        <Route path="/ListarMantenimiento" component={ListarMantenimiento} />
        <Route path="/EditarMantenimiento/:id" component={EditarMantenimiento} />

        <Route path="/RegistrarServicioMecanicoVehiculo" component={RegistrarServicioMecanicoVehiculo} />
        <Route path="/ListarServicioMecanicoVehiculo" component={ListarServicioMecanicoVehiculo} />
        <Route path="/EditarServicioMantenimientoApoyoMecanico/:id" component={EditarServicioMantenimientoApoyoMecanico} />
        
        <Route path="/RegistrarProductoMantenimiento" component={RegistrarProductoMantenimiento} />
        <Route path="/ListarProductoMantenimiento" component={ListarProductoMantenimiento} />
        <Route path="/EditarProducto_Mantenimiento/:id" component={EditarProducto_Mantenimiento} />
        
        <Route path="/PlacaRepetidaVehiculo" component={PlacaRepetidaVehiculo} />
        <Route path="/IdentificacionMantenimiento" component={IdentificacionMantenimiento} />
        <Route path="/ServicioAsociadoVehiculo" component={ServicioAsociadoVehiculo} />
        <Route path="/ErrorVehiculoProductoMantenimiento" component={ErrorVehiculoProductoMantenimiento} />

        <Route path="/GenerarFactura" component={GenerarFactura} />
        <Route path="/BuscarVehiculosCliente/:documento" component={BuscarVehiculosCliente} />
        <Route path="/GenerarFacturaProducto/:placa" component={GenerarFacturaProducto} />

        <Route path="/ListarVehiculosCliente/:documento" component={ListarVehiculosCliente} />
        <Route path="/IngresarClienteDocumento" component={IngresarClienteDocumento} />
        <Route path="/ClientenoRegistrado" component={ClientenoRegistrado} />

        <Route path="/ErrorFacturacionc" component={ErrorFacturacionc} />
        <Route path="/ErrorTerminadoNoTerminado" component={ErrorTerminadoNoTerminado} />
        
      </div>
      
    </Router>
  );
}

export default App;

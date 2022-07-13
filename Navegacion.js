
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/ListarUsuarios">
                    REGISTRO CLIENTES
                    </Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                        <Link className="nav-link" to="/InsertarCliente"><b>INSERTAR CLIENTE</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/RegistrarVehiculo"><b>REGISTRAR VEHICULO</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/RegistrarMantenimiento"><b>REGISTRAR MANTENIMIENTO</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/RegistrarServicioMecanicoVehiculo"><b>REGISTRAR SERVICIO A VEHICULO CON MECANICO</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/RegistrarProductoMantenimiento"><b>REGISTRAR PRODUCTO VEHICULO MANTENIMIENTO</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/GenerarFactura"><b>FACTURA</b></Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/IngresarClienteDocumento"><b>INGRESO USUARIO</b></Link>
                        </li>
                        
                       
                        
                        </ul>
                    </div>
                </div>


            </nav>
        )
    }
}


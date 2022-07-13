





import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarVehiculosCliente extends Component {

    state= {
        vehiculos: [],    
    }

    componentDidMount() {
     
        this.getvehiculos();    
        
       }


       getvehiculos = async () =>{
        const per = await axios.get('http://localhost:8002/Vehiculos/');
        this.setState({vehiculos: per.data});    
        
        }
        

                                            

    render() {
        
        return (
            <div className="row">
                {
                    this.state.vehiculos.filter(x=> x.dueño === this.props.match.params.documento).map(cor => (
                        
                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card"> 
                            <div className="card-header d-flex justify-content-between">
                     
                            <Link className="btn btn-secondary" to={"/GenerarFacturaProducto/" + cor.placa}>
                            Generar Factura
                            </Link>
                     
                             </div>  
                        
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Placa Del Vehiculo</b>: {cor.placa}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Dueño Del Vehiculo</b>: {cor.dueño}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Fecha De Registro</b>: {cor.fecha_registro_carro}</h5>  
                            </div>
                            
                            
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}



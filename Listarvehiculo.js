

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listarvehiculo extends Component {

    state= {
        vehiculos: [],  
    }

    componentDidMount() {
     
        this.getvehiculos();   
       }
      
       getvehiculos = async () =>{
        const per = await axios.get('http://localhost:8002/Vehiculos/');
        this.setState({vehiculos:per.data});    
        
        }
        
        deletevehiculo = async (id) => {
              
            await axios.delete('http://localhost:8002/EliminarVehiculo/' + id);
            
            this.getvehiculos();     
            
        }

        


    render() {
        
        return (
            <div className="row">
                {
                    this.state.vehiculos.map(cor => (

                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                        
                        <div className="card-header d-flex justify-content-between">
                        
                             <Link className="btn btn-secondary" to={"/EditarVehiculo/" +cor.id}>
                                Editar Vehiculo
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Placa </b>: {cor.placa}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Dueño </b>: {cor.dueño} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha De Registro Del Vehiculo </b>: {cor.fecha_registro_carro} </h5>  
                            </div>

                
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletevehiculo(cor.id)}>
                                    Eliminar Vehiculo
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/RegistrarVehiculo"}>
                              INSERTAR VEHICULO
                             </Link>
                             
                            </div>
    
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}


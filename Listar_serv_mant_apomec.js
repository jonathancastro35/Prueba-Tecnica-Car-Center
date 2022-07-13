



import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Listar_serv_mant_apomec extends Component {

    state= {
        lissermamecs: [],  
    }

    componentDidMount() {
     
        this.getobteners();   
       }
      
       getobteners = async () =>{
        const per = await axios.get('http://localhost:8002/Servicio_Mantenimiento_Apoyomecanicos/');
        this.setState({lissermamecs:per.data});    
        }
        
        deleteobtener = async (id) => {
              
            await axios.delete('http://localhost:8002/EliminarServicio_Mantenimiento_Apoyomecanico/' + id);
            
            this.getobteners();     
            
        }

        


    render() {
        
        return (
            <div className="row">
                {
                    this.state.lissermamecs.map(cor => (

                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                        
                        <div className="card-header d-flex justify-content-between">
                        
                             <Link className="btn btn-secondary" to={"/EditarServicioMantenimientoApoyoMecanico/" + cor.id}>
                                Editar
                             </Link>
                             
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Servicio Utilizado </b>: {cor.servicio} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Identificación Del Mantenimiento</b>: {cor.mantenimiento} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Identificación Del Mecanico</b>: {cor.mecanico} </h5>  
                            </div>
                            
                
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteobtener(cor.id)}>
                                 Eliminar 
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/RegistrarServicioMecanicoVehiculo"}>
                              INSERTAR SERVICIO CON EL MECANICO
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


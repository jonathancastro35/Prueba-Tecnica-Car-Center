


import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarMantenimiento extends Component {

    state= {
        mantenimientos: [],  
    }

    componentDidMount() {
     
        this.getmantenimientos();   
       }
      
       getmantenimientos = async () =>{
        const per = await axios.get('http://localhost:8002/Mantenimientos/');
        this.setState({mantenimientos:per.data});    
        
        }
        
        deletemantenimiento = async (id) => {
              
            await axios.delete('http://localhost:8002/EliminarMantenimiento/' + id);
            
            this.getmantenimientos();     
            
        }

        


    render() {
        
        return (
            <div className="row">
                {
                    this.state.mantenimientos.map(cor => (

                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                        
                        <div className="card-header d-flex justify-content-between">
                        
                             <Link className="btn btn-secondary" to={"/EditarMantenimiento/" + cor.id}>
                                Editar Mantenimiento
                             </Link>
                             
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>identificacion mantenimiento </b>: {cor.id_mantenimiento} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>vehiculo</b>: {cor.vehiculo} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>estado</b>: {cor.estado} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>fecha de registro</b>: {cor.fecha_registro_mantenimiento} </h5>  
                            </div>
                            
                
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletemantenimiento(cor.id)}>
                                    Eliminar Mantenimiento
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/RegistrarMantenimiento"}>
                              INSERTAR MANTENIMIENTO
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


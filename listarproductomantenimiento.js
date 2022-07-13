

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class listarproductomantenimiento extends Component {

    state= {
        lproductomantenimiento: [],  
    }

    componentDidMount() {
     
        this.getlproductomantenimiento();   
       }
      
       getlproductomantenimiento = async () =>{
        const per = await axios.get('http://localhost:8002/Producto_mantenimientos/');
        this.setState({lproductomantenimiento:per.data});    
        }
        
        deletegetlproductomantenimiento = async (id) => {
              
            await axios.delete('http://localhost:8002/EliminarProducto_Mantenimiento/' + id);
            
            this.getlproductomantenimiento();     
            
        }

        


    render() {
        
        return (
            <div className="row">
                {
                    this.state.lproductomantenimiento.map(cor => (

                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                        
                        <div className="card-header d-flex justify-content-between">
                        
                             <Link className="btn btn-secondary" to={"/EditarProducto_Mantenimiento/" + cor.id}>
                                Editar
                             </Link>
                             
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Identificación Del Mantenimiento</b>: {cor.id_mantenimiento} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id producto utilizado</b>: {cor.producto} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Cantidad Utilizada</b>: {cor.cantidad_utilizar} </h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha De Compra</b>: {cor.fecha_compra} </h5>  
                            </div>
                            
                
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletegetlproductomantenimiento(cor.id)}>
                                 Eliminar 
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/RegistrarProductoMantenimiento"}>
                              REGISTRAR PRODUCTO VEHICULO MANTENIMIENTO
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


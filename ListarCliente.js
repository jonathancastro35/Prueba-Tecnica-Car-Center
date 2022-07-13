
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarCliente extends Component {

    state= {
        clientes: [],  
    }

    componentDidMount() {
     
        this.getclientes();   
       }
      
       getclientes = async () =>{
        const per = await axios.get('http://localhost:8002/Clientes/');
        this.setState({clientes:per.data});    
        
        }
        
        deletecliente = async (documento) => {
              
            await axios.delete('http://localhost:8002/EliminarCliente/' + documento);
            
            this.getclientes();     
            
        }

        


    render() {
        
        return (
            <div className="row">
                {
                    this.state.clientes.map(cor => (
                        

                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                        
                        <div className="card-header d-flex justify-content-between">
                        <h5><b>Modificar Cliente</b>: {cor.documento}</h5>
                             <Link className="btn btn-secondary" to={"/EditarCliente/" + cor.id}>
                                Editar Cliente
                             </Link>
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Correo Cliente </b>: {cor.correo_electronico}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Primer Nombre </b>: {cor.primer_nombre}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Segundo Nombre </b>: {cor.segundo_nombre}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Primer Apellido</b>: {cor.primer_apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Segundo Apellido</b>: {cor.segundo_apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Tipo De Documento</b>: {cor.tipo_de_documento}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Cliente identificación</b>: {cor.documento}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Celular</b>: {cor.celular}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Direccion</b>: {cor.direccion}</h5>  
                            </div>
                            
                
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletecliente(cor.documento)}>
                                    Eliminar Cliente
                                </button>
                            </div> 

                            

    
                        </div>
                        <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/InsertarCliente"}>
                              INSERTAR CLIENTE
                             </Link>
                             
                             </div>
                        </div>

                        

                    ))
                }


               
            </div>
            
        )

       
    }

  
}


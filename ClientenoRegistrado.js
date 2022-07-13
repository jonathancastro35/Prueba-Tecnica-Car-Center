


import React, { Component } from 'react'
//import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ClientenoRegistrado extends Component {

    state= {
        
    }

    componentDidMount() {
          
       }

     

    
    
    render() {
       
        return (
            <div className="col-md-8 p-1" align="center">
                            
                        <div className="card">
                        <h5>EL CLIENTE NO SE ENCUENTRA REGISTRADO</h5> 
                        </div>

                        <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <Link className="btn btn-secondary" to={"/IngresarClienteDocumento"}>
                         Intentar De Nuevo
                        </Link>
                        </div>
            </div>

            
            
                 
        )
    }
}

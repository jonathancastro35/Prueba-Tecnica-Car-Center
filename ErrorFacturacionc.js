


import React, { Component } from 'react'
//import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ErrorFacturacionc extends Component {

    state= {
        
    }

    componentDidMount() {
          
       }

     

    
    
    render() {
       
        return (
            <div className="col-md-8 p-1" align="center">
                            
                        <div className="card">
                        <h5>EL MONTO DE LA FACTURA SUPERA LO PROPUESTO POR EL CLIENTE</h5> 
                        </div>

                        <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <Link className="btn btn-secondary" to={"/ListarCliente"}>
                         Intentar De Nuevo
                        </Link>
                        </div>
            </div>

            
            
                 
        )
    }
}

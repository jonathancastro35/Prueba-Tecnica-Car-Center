



import React, { Component } from 'react'
//import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class placarepetidavehiculo extends Component {

    state= {
        
    }

    componentDidMount() {
          
       }

     

    
    
    render() {
       
        return (
            <div className="col-md-8 p-1" align="center">
                            
                        <div className="card">
                        <h5>LA PLACA DE VEHICULO YA EXISTE</h5> 
                        </div>

                        <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <Link className="btn btn-secondary" to={"/RegistrarVehiculo"}>
                         Intentar De Nuevo
                        </Link>
                        </div>
            </div>

            
            
                 
        )
    }
}

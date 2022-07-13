

import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class IngresoClientes extends Component {
    state = {
        documento:'',
        editing: false
        
    }

    async componentDidMount(){
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Cliente/' + this.props.match.params.id);
        
        this.setState({

            documento:res.data.documento,
            
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


 

    
  ingresocliente = async a =>{

        a.preventDefault();
        
        var cont1=0;
        
        const resx=axios.get('http://localhost:8002/Clientes/') 

        for(var ee1=0; ee1<(await resx).data.length; ee1++){
            
            if( (await resx).data[ee1].documento === this.state.documento ){
            cont1=cont1+1;
            }   
            }

            if(cont1 > 0 ){
                window.location.href  = "/ListarVehiculosCliente/"+this.state.documento; 
                
                }

                if(cont1 === 0){
                    window.location.href  = "/ClientenoRegistrado"; 
                    }
                    }

    

    onInputChange = e =>{
        
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    onInputChange2 = e =>{
        
      this.setState({
        [e.target.name]: e.target.value  
      })
  }


    onChangeFechanac = e => {
      this.setState({e})
    }

    

    render() {

        return (

          <div className="col-md-25 offset-md-1">
          <div className="card card-body">
              <h4 align="center">INGRESO SU DOCUMENTO PARA GENERAR SU FACTURA</h4>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="DIGITE SU DOCUMENTO" 
                      name="documento"
                      onChange= {this.onInputChange}
                      value={this.state.documento}
                      required
                      />  
                    </div>

                   
                
                    
              <form onSubmit={this.ingresocliente}>
                        <button type="submit" className="btn btn-primary">
                         INGRESAR
                        </button>
                    </form>

                    </div>


                           

                            
            </div>


           
        )
    }
}



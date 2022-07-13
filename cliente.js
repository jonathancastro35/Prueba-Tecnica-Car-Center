
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class cliente extends Component {
    state = {

        clientes: [], 
        primer_nombre:'',
        segundo_nombre:'',
        primer_apellido:'',
        segundo_apellido:'',
        tipo_de_documento:'',
        documento:'',
        celular:'',
        direccion:'',
        correo_electronico:'',
        clave:'',
        
        editing: false

    }
    
    async componentDidMount(){
      this.getclientes();
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Cliente/' + this.props.match.params.id);
        
        this.setState({

        primer_nombre:res.data.primer_nombre,
        segundo_nombre:res.data.segundo_nombre,
        primer_apellido:res.data.primer_apellido,
        segundo_apellido:res.data.segundo_apellido,
        tipo_de_documento:res.data.tipo_de_documento,
        documento:res.data.documento,
        celular:res.data.celular,
        direccion:res.data.direccion,
        correo_electronico:res.data.correo_electronico,
        clave:res.data.clave,
          
        editing: true,
        _id: this.props.match.params.id 
        })
        
    }
  }

  
  getclientes = async () =>{
        const per = await axios.get('http://localhost:8002/Clientes/');
        this.setState({clientes:per.data});    
        
   }

    createcliente = async a =>{

        a.preventDefault();

        const newDir = {

            primer_nombre:this.state.primer_nombre,
            segundo_nombre:this.state.segundo_nombre,
            primer_apellido:this.state.primer_apellido,
            segundo_apellido:this.state.segundo_apellido,
            tipo_de_documento:this.state.tipo_de_documento,
            documento:this.state.documento,
            celular:this.state.celular,
            direccion:this.state.direccion,
            correo_electronico:this.state.correo_electronico,
            clave:this.state.clave,

            editing: true,
            _id: this.props.match.params.id 
        };

        

        if(this.state.editing){
          
          await axios.put('http://localhost:8002/ActualizarCliente/' + this.props.match.params.id, newDir);

          window.location.href = '/ListarCliente';  
          
          }

          else{
         
            await axios.post('http://localhost:8002/CrearCliente/', newDir);
              
          
            window.location.href = '/ListarCliente';  
          }
      
        
    }

    onSecondInputChange(event) {
      const value = event.target.value;
      this.setState({
        identifiacion: value
      });
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
              <h4 align="center">REGISTRO DE CLIENTES</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Primer Nombre" 
                      name="primer_nombre"
                      onChange= {this.onInputChange}
                      value={this.state.primer_nombre}
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Segundo Nombre" 
                      name="segundo_nombre"
                      onChange= {this.onInputChange}
                      value={this.state.segundo_nombre}
                      />  
                    </div>
                    

                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Primer Apellido" 
                      name="primer_apellido"
                      onChange= {this.onInputChange}
                      value={this.state.primer_apellido}
                      />  
                    </div>

                    
                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Segundo Apellido" 
                      name="segundo_apellido"
                      onChange= {this.onInputChange}
                      value={this.state.segundo_apellido}
                      />  
                    </div>
                    
                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">Tipo De Documento</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange} name="tipo_de_documento">
                 
                   <option value="C.C">C.C</option>
                   <option value="T.E">T.E</option>
                   <option value="C.E">C.E</option>

                   
                   
                 </select>
                  </label>
                  </form>
                  </div>

                  <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Celular" 
                      name="celular"
                      onChange= {this.onInputChange}
                      value={this.state.celular}
                      />  
                    </div>  

                  <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Documento" 
                      name="documento"
                      onChange= {this.onInputChange}
                      value={this.state.documento}
                      />  
                    </div>
                    
                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Direccion" 
                      name="direccion"
                      onChange= {this.onInputChange}
                      value={this.state.direccion}
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Correo Electronico" 
                      name="correo_electronico"
                      onChange= {this.onInputChange}
                      value={this.state.correo_electronico}
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="password"
                      className="form-control" 
                      placeholder="Digite La Clave" 
                      name="clave"
                      onChange= {this.onInputChange}
                      value={this.state.clave}
                      />  
                    </div>

                    


              <form onSubmit={this.createcliente}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR CLIENTE
                        </button>
                    </form>

                    <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/ListarCliente"}>
                              LISTAR CLIENTES
                             </Link>
                             
                            </div>

                    </div>
            </div>
           
        )
    }
}


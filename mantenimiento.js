

import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class mantenimiento extends Component {
    state = {
        
         mantenimientos: [],
         vehiculos: [],
         
         id_mantenimiento:'',
         vehiculo:'',
         estado:'no_terminado',

         editing: false

    }
    
    async componentDidMount(){
      this.getmantenimientos();
      this.getvehiculos();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Mantenimiento/' + this.props.match.params.id);
        
        this.setState({

            id_mantenimiento:res.data.id_mantenimiento,
            vehiculo:res.data.vehiculo,
            estado:res.data.estado,

            editing: true,
        _id: this.props.match.params.id 
        })
        
    }
  }

  
  getmantenimientos = async () =>{
        const per = await axios.get('http://localhost:8002/Mantenimientos/');
        this.setState({mantenimientos:per.data});    
        
    }

   

    getvehiculos = async () =>{
    
    
    const pera = await axios.get('http://localhost:8002/Vehiculos/');
    this.setState({vehiculos:pera.data
    }); 

    const res = await axios.get('http://localhost:8002/Vehiculos/');
    this.setState({
        vehiculo: res.data[0].placa,  
    })
    
    
    }

    createmantenimientos = async a =>{

        a.preventDefault();

        const newDir = {

	        id_mantenimiento:this.state.id_mantenimiento,
            vehiculo:this.state.vehiculo,
            estado:this.state.estado,

            editing: true,
            _id: this.props.match.params.id 
        
        };

        

        if(this.state.editing){
          
          await axios.put('http://localhost:8002/ActualizarMantenimiento/' + this.props.match.params.id, newDir);

          window.location.href = '/ListarMantenimiento';  
          
          }

          else{
            
            const v = await axios.get('http://localhost:8002/Mantenimientos/');
            var cont = 0;
            for(var i=0; i<(await v).data.length; i++){
            if( (await v).data[i].id_mantenimiento ===  this.state.id_mantenimiento) {
            cont = cont+1;  
            }  
            }

            if(cont>0){
            window.location.href = '/IdentificacionMantenimiento';    
            }
         
            await axios.post('http://localhost:8002/CrearMantenimiento/', newDir);
              
          
            window.location.href = '/ListarMantenimiento';  
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
              <h4 align="center">REGISTRO DE MANTENIMIENTOS</h4>
              
             
                    <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Identificación Del Mantenimiento" 
                      name="id_mantenimiento"
                      onChange= {this.onInputChange}
                      value={this.state.id_mantenimiento}
                      />  
                    </div>


                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">VEHICULO</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="vehiculo" >
                 
                                     {
                              
                              this.state.vehiculos.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.placa}>
                                   
                                   
                                   {infaa.placa} - {infaa.dueño}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>

                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">ESTADO</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange} name="estado">
                 
                   <option value="no_terminado">no_terminado</option>
                   <option value="terminado">terminado</option>
                   
                 </select>
                  </label>
                  </form>
                  </div>
                    

              <form onSubmit={this.createmantenimientos}>
                        <button type="submit" className="btn btn-primary">
                         REGISTRAR MANTENIMIENTO
                        </button>
                    </form>

                    

                    </div>
            </div>
           
        )
    }
}


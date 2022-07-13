
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class vehiculo extends Component {
    state = {
     
         vehiculos: [],
         clientes: [],
         placa:'',
	       dueño:'',
         presuarrevehiculo:'',

        editing: false

    }
    
    async componentDidMount(){
      this.getvehiculos();
      this.getclientes();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Vehiculo/' + this.props.match.params.id);
        
        this.setState({

            placa:res.data.placa,
            dueño:res.data.dueño,
            presuarrevehiculo:res.data.presuarrevehiculo,

            editing: true,
        _id: this.props.match.params.id 
        })
        
    }
  }

  
  getvehiculos = async () =>{
        const per = await axios.get('http://localhost:8002/Vehiculos/');
        this.setState({vehiculos:per.data});    
        
    }

   

   getclientes = async () =>{
    
    
    const pera = await axios.get('http://localhost:8002/Clientes/');
    this.setState({clientes:pera.data
    }); 

    const res = await axios.get('http://localhost:8002/Clientes/');
    this.setState({
        dueño: res.data[0].documento,  
    })
    
    
    }

    createvehiculos = async a =>{

        a.preventDefault();

        const newDir = {

            placa:this.state.placa,
	          dueño:this.state.dueño,
            presuarrevehiculo:this.state.presuarrevehiculo,

            editing: true,
            _id: this.props.match.params.id 
        
        };

        

        if(this.state.editing){
          
          await axios.put('http://localhost:8002/ActualizarVehiculo/' + this.props.match.params.id, newDir);

          window.location.href = '/ListarVehiculo';  
          
          }

          else{

            const v = await axios.get('http://localhost:8002/Vehiculos/');
            var cont = 0;
            for(var i=0; i<(await v).data.length; i++){
            if( (await v).data[i].placa ===  this.state.placa) {
            cont = cont+1;  
            }  
            }

            if(cont>0){
            window.location.href = '/PlacaRepetidaVehiculo';    
            }

             
            await axios.post('http://localhost:8002/CrearVehiculo/', newDir);
              
          
            window.location.href = '/ListarVehiculo';  
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
              <h4 align="center">REGISTRO DE VEHICULOS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

              <div className="form-group">
                      <input 
                      type="text"
                      className="form-control" 
                      placeholder="Placa Del Vehiculo" 
                      name="placa"
                      onChange= {this.onInputChange}
                      value={this.state.placa}
                      />  
                    </div>

                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">ID DEL CLIENTE</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="dueño" >
                 
                                     {
                              
                              this.state.clientes.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.documento}>
                                   
                                   
                                   {infaa.documento} - {infaa.primer_nombre}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>

                  <div className="form-group">
                      <input 
                      type="number"
                      className="form-control" 
                      placeholder="Cuanto Propone Para El Arreglo(sin punto), si no va Proponer, colocar cero" 
                      name="presuarrevehiculo"
                      onChange= {this.onInputChange}
                      value={this.state.presuarrevehiculo}
                      />  
                    </div>
                    

              <form onSubmit={this.createvehiculos}>
                        <button type="submit" className="btn btn-primary">
                         REGISTRAR VEHICULO
                        </button>
                    </form>

                    

                    </div>
            </div>
           
        )
    }
}


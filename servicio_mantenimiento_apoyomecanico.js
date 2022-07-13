


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class servicio_mantenimiento_apoyomecanico extends Component {
    state = {

        servmanapome:[],
        servicios: [],
        mantenimientos: [],
        mecanicos: [],

        servicio:'',
	    mantenimiento:'',
	    mecanico:'',
        
        editing: false

    }
    
    async componentDidMount(){

      this.getservmanapomes();
      this.getservicios();
      this.getmantenimientos();
      this.getmecanicos();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Servicio_Mantenimiento_Apoyomecanico/' + this.props.match.params.id);
        
        this.setState({

            servicio:res.data.servicio,
	        mantenimiento:res.data.mantenimiento,
	        mecanico:res.data.mantenimiento,

           editing: true,
          _id: this.props.match.params.id 
        })
        
    }
  }

  
  getservmanapomes = async () =>{
        const per = await axios.get('http://localhost:8002/Servicio_Mantenimiento_Apoyomecanicos/');
        this.setState({servmanapome:per.data});    
        
    }

   

    getservicios = async () =>{
    
    const pera = await axios.get('http://localhost:8002/Servicios/');
    this.setState({servicios:pera.data
    }); 

    const res = await axios.get('http://localhost:8002/Servicios/');
    this.setState({
        servicio: res.data[0].id_servicio,  
    })
    
    }

    getmantenimientos = async () =>{
    
        const pera = await axios.get('http://localhost:8002/Mantenimientos/');
        this.setState({mantenimientos:pera.data
        }); 
    
        const res = await axios.get('http://localhost:8002/Mantenimientos/');
        this.setState({
            mantenimiento: res.data[0].id_mantenimiento,  
        })
        
        }

        getmecanicos= async () =>{
    
            const pera = await axios.get('http://localhost:8002/Mecanicos/');
            this.setState({mecanicos:pera.data
            }); 
        
            const res = await axios.get('http://localhost:8002/Mecanicos/');
            this.setState({
                mecanico: res.data[0].documento,  
            })
            
            }

    createservicio_mantenimiento_apoyomecanico = async a =>{

        a.preventDefault();

        const newDir = {

            servicio:this.state.servicio,
	        mantenimiento:this.state.mantenimiento,
	        mecanico:this.state.mecanico,

          editing: true,
          _id: this.props.match.params.id 
        
        };

        

        if(this.state.editing){
          
          await axios.put('http://localhost:8002/ActualizarServicio_Mantenimiento_Apoyomecanico/' + this.props.match.params.id, newDir);

          window.location.href = '/ListarServicioMecanicoVehiculo';  
          
          }

          else{

            const v = await axios.get('http://localhost:8002/Servicio_Mantenimiento_Apoyomecanicos/');
            var cont = 0;
            for(var i=0; i<(await v).data.length; i++){
            let z = (await v).data[i].servicio;
            let z2 = (await v).data[i].mantenimiento;
            let z3 = this.state.servicio;
            let z4 = this.state.mantenimiento;
            if( (z+z2) ===  (z3+z4)) {
            cont = cont+1;  
            }  
            }

            if(cont>0){
            window.location.href = '/ServicioAsociadoVehiculo';    
            }
         
            await axios.post('http://localhost:8002/CrearServicio_Mantenimiento_Apoyomecanico/', newDir);
              
          
            window.location.href = '/ListarServicioMecanicoVehiculo';  
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
              <h4 align="center">ASIGNACION DE MECANICO, SERVICIO, PARA VEHICULO REGISTRADO</h4>
              

                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">SERVICIO</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="servicio" >
                 
                                     {
                              
                              this.state.servicios.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.id_servicio}>
                                   
                                   
                                   {infaa.id_servicio} - {infaa.nombre_servicio}
                                   
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
                  <h5 align="left">VEHICULO EN MANTENIMIENTO</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="mantenimiento" >
                 
                                     {
                              
                              this.state.mantenimientos.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.id_mantenimiento}>
                                   
                                   
                                   {infaa.vehiculo} - {infaa.id_mantenimiento}
                                   
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
                  <h5 align="left">MECANICO</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="mecanico" >
                 
                                     {
                              
                              this.state.mecanicos.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.documento}>
                                   
                                   
                                   {infaa.documento} - {infaa.primer_nombre}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>

                  
                    

              <form onSubmit={this.createservicio_mantenimiento_apoyomecanico}>
                        <button type="submit" className="btn btn-primary">
                         REGISTRAR 
                        </button>
                    </form>

                    

                    </div>
            </div>
           
        )
    }
}


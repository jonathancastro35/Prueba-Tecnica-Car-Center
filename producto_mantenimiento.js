


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class producto_mantenimiento extends Component {
    state = {

        prodmantetos:[],
        mantenimientos: [],
        productos: [],

        id_mantenimiento:'',
        producto :'',
        cantidad_utilizar :'',
        
        editing: false

    }
    
    async componentDidMount(){

      this.getprodmantetos();
      this.getmantenimientos();
      this.getproductos();
      

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8002/Producto_mantenimientos/' + this.props.match.params.id);
        
        this.setState({

            id_mantenimiento:res.data.id_mantenimiento,
            producto:res.data.producto,
            cantidad_utilizar:res.data.cantidad_utilizar,

           editing: true,
          _id: this.props.match.params.id 
        })
        
    }
  }

  
  getprodmantetos = async () =>{
        const per = await axios.get('http://localhost:8002/Producto_mantenimientos/');
        this.setState({prodmantetos:per.data});    
        
    }

   
    getmantenimientos = async () =>{
    
    const pera = await axios.get('http://localhost:8002/Mantenimientos/');
    this.setState({mantenimientos:pera.data
    }); 

    const res = await axios.get('http://localhost:8002/Mantenimientos/');
    this.setState({
        id_mantenimiento: res.data[0].id_mantenimiento,  
    })
    
    }

    getproductos = async () =>{
    
        const pera = await axios.get('http://localhost:8002/Productos/');
        this.setState({productos:pera.data
        }); 
    
        const res = await axios.get('http://localhost:8002/Productos/');
        this.setState({
            producto: res.data[0].id_p,  
        })
        
        }

       

    createproductomantenimiento = async a =>{

        a.preventDefault();

        const newDir = {

            id_mantenimiento:this.state.id_mantenimiento,
            producto:this.state.producto,
            cantidad_utilizar:this.state.cantidad_utilizar,

            editing: true,
            _id: this.props.match.params.id 
        
        };

        

        if(this.state.editing){
          
          await axios.put('http://localhost:8002/ActualizarProducto_Mantenimiento/' + this.props.match.params.id, newDir);

          window.location.href = '/ListarProductoMantenimiento';  
          
          }

          else{
            
            const v = await axios.get('http://localhost:8002/Producto_mantenimientos/');
            var cont = 0;
            for(var i=0; i<(await v).data.length; i++){
            let z = (await v).data[i].id_mantenimiento;
            let z2 = (await v).data[i].producto;
            let z3 = this.state.id_mantenimiento;
            let z4 = this.state.producto;
            if( (z+z2) ===  (z3+z4)) {
            cont = cont+1;  
            }  
            }

            if(cont>0){
            window.location.href = '/ErrorVehiculoProductoMantenimiento';    
            }
         
            await axios.post('http://localhost:8002/CrearProducto_mantenimiento/', newDir);
              
          
            window.location.href = '/ListarProductoMantenimiento';  
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
              <h4 align="center">ASIGNACION DE PRODUCTO, PARA VEHICULO REGISTRADO</h4>

              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">VEHICULO EN MANTENIMIENTO CON SU ID</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="id_mantenimiento" >
                 
                                     {
                              
                              this.state.mantenimientos.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.id_mantenimiento}>
                                   
                                   
                                {infaa.id_mantenimiento} - {infaa.vehiculo} 
                                   
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
                  <h5 align="left">PRODUCTO A UTILIZAR, CON IDENTIFICACION Y TIENDA A LA QUE PERTENECE</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="producto" >
                 
                                     {
                              
                              this.state.productos.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.id_p}>
                                   
                                   
                                   {infaa.id_p} - {infaa.nombre_producto} - {infaa.id_tiendapertenece}
                                   
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
                      placeholder="Cantidad a utilizar" 
                      name="cantidad_utilizar"
                      onChange= {this.onInputChange}
                      value={this.state.cantidad_utilizar}
                      />  
                    </div>   

              <form onSubmit={this.createproductomantenimiento}>
                        <button type="submit" className="btn btn-primary">
                         REGISTRAR 
                        </button>
                    </form>

                    

                    </div>
            </div>
           
        )
    }
}


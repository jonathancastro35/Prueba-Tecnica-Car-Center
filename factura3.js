



import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"
import jsPDF from 'jspdf'

export default class factura3 extends Component {

    state= {
        mantenimientos: [], 
        producmantenimientos:[],

    }

    componentDidMount() { 
       
        this.generatePDF();
       }  

       
       
        generatePDF = async() => {

            const aaa = await axios.get('http://localhost:8002/Mantenimientos/'); 

            
            for(var ia=0; ia<(await aaa).data.length; ia++){ 
            if( (await aaa).data[ia].vehiculo ===  this.props.match.params.placa) { 
            break;      
            }
            }

            const servicios = [];
            const mecanicos = [];

            const aaa2 = await axios.get('http://localhost:8002/Servicio_Mantenimiento_Apoyomecanicos/'); 
            for(var ia2=0; ia2<(await aaa2).data.length; ia2++){ 
            if( (await aaa2).data[ia2].mantenimiento ===  (await aaa).data[ia].id_mantenimiento) { 
            servicios.push((await aaa2).data[ia2].servicio)   
            mecanicos.push((await aaa2).data[ia2].mecanico)    
            }
            }

            
            var doccc = new jsPDF();
            var aa11=6;
            doccc.setTextColor(255, 191, 0);
            doccc.text(1, aa11, "Servicios Utilizados:") 
            var totalservice=0;
 
    
    const a46 = await axios.get('http://localhost:8002/Servicios/');
    const a47 = await axios.get('http://localhost:8002/Mecanicos/');
      
    for(var cc=0; cc<servicios.length; cc++) {  

    for(var si2=0; si2<(await a46).data.length; si2++){
    if( (await a46).data[si2].id_servicio === servicios[cc]){ 

        aa11=aa11+10;
        doccc.setTextColor(0, 0, 0);
        doccc.text(20, aa11, "Nombre Del Servicio:"+(await a46).data[si2].nombre_servicio+"")

        aa11=aa11+10;
        doccc.setTextColor(0, 0, 0);
        doccc.text(20, aa11, "Costo Mano De obra:"+(await a46).data[si2].mano_obra_servicio+"")
        totalservice=totalservice+(await a46).data[si2].mano_obra_servicio; 
        
    
    }
    }

   
        for(var si3=0; si3<(await a47).data.length; si3++){
        if( (await a47).data[si3].documento  === mecanicos[cc]){ 
    
            aa11=aa11+10;
            doccc.setTextColor(0, 0, 0);
            doccc.text(20, aa11, "Nombre Del Mecanico:"+(await a47).data[si3].primer_nombre+"")
        
            aa11=aa11+10;
            doccc.setTextColor(255, 0, 0);
            doccc.text(20, aa11, "Numero De Documento Del Mecanico:"+(await a47).data[si3].documento+"")
            break;
            
        } 
        }
        

 
    }


  
            

            const vi = await axios.get('http://localhost:8002/Vehiculos/'); 

            var xvi="";
          
            for(var ii=0; ii<(await vi).data.length; ii++){ 
            if( (await vi).data[ii].placa ===  this.props.match.params.placa) { 
            xvi=(await vi).data[ii].dueño;         
            }
            }

            const vi2t = await axios.get('http://localhost:8002/Vehiculos/'); 
            
            for(var ibi=0; ibi<(await vi2t).data.length; ibi++){ 
                if( (await vi2t).data[ibi].placa ===  this.props.match.params.placa) {    
                 break;     
                }
                }

            var ppp = (parseInt((await vi2t).data[ibi].presuarrevehiculo));

            
                const vi2 = await axios.get('http://localhost:8002/Clientes/'); 
            var doc = new jsPDF();
            var doc2 = new jsPDF();

            var a1=6;
                

            const per1 = await axios.get('http://localhost:8002/Mantenimientos/'); 

            var x="";
            for(var i=0; i<(await per1).data.length; i++){ 
            if( (await per1).data[i].vehiculo ===  this.props.match.params.placa) { 
            x=(await per1).data[i].id_mantenimiento;       
            }
            }


            const per2 = await axios.get('http://localhost:8002/Producto_mantenimientos/');
            var vec = [];
            var cantiutilizar = []; 
            var total=0;

            for(var j=0; j<(await per2).data.length; j++){
            if((await per2).data[j].id_mantenimiento === x){
            vec.push((await per2).data[j].producto)
            cantiutilizar.push((await per2).data[j].cantidad_utilizar)
            }    
            }
            

            const per2a = await axios.get('http://localhost:8002/Productos/');

            a1=a1+10;
            doc.setTextColor(255, 191, 0);
            doc.text(1, a1, "Productos utilizados:") 


            for(var j2=0; j2<(await per2a).data.length; j2++){
            for(var j3=0; j3<vec.length; j3++){
            if((await per2a).data[j2].id_p === vec[j3]){    

            a1=a1+10;
            doc.setTextColor(0, 0, 0);
            doc.text(20, a1, "Producto:"+(await per2a).data[j2].nombre_producto+"")

            a1=a1+10;
            doc.setTextColor(0, 0, 255);
            doc.text(20, a1, "Valor Unidad:"+(await per2a).data[j2].valor_unidad+"")
            
            a1=a1+10;
            doc.setTextColor(255, 0, 0);
            doc.text(20, a1, "Cantidad Utilizadas:"+cantiutilizar[j3]+"")

            a1=a1+10;
            doc.setTextColor(0, 255, 0);
            doc.text(20, a1, "Subtotal:"+(cantiutilizar[j3]*(await per2a).data[j2].valor_unidad)+"")
            
            total=total+(cantiutilizar[j3]*(await per2a).data[j2].valor_unidad);
            
            }
            }
            }

                var a2=6;
                var vecinfopersonal = [];
    
                a2 = a2+10;
                doc2.setTextColor(0, 255, 0);
                doc2.text(1, a2, "Información Personal:") 
    
                for(var ii2=0; ii2<(await vi2).data.length; ii2++){ 
                    if( (await vi2).data[ii2].documento ===  xvi) {
                        
                    vecinfopersonal.push((await vi2).data[ii2].primer_nombre)
                    vecinfopersonal.push((await vi2).data[ii2].segundo_nombre)
                    vecinfopersonal.push((await vi2).data[ii2].primer_apellido)
                    vecinfopersonal.push((await vi2).data[ii2].segundo_apellido)
                    vecinfopersonal.push((await vi2).data[ii2].tipo_de_documento)
                    vecinfopersonal.push((await vi2).data[ii2].documento)
                    vecinfopersonal.push((await vi2).data[ii2].celular)
                    vecinfopersonal.push((await vi2).data[ii2].direccion)
                    vecinfopersonal.push((await vi2).data[ii2].correo_electronico)      
                    }
                    }
                
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Primer Nombre:"+vecinfopersonal[0]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Segundo Nombre:"+vecinfopersonal[1]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Primer Apellido:"+vecinfopersonal[2]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Segundo Apellido:"+vecinfopersonal[3]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Tipo De Documento:"+vecinfopersonal[4]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Documento:"+vecinfopersonal[5]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Celular:"+vecinfopersonal[6]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Dirección:"+vecinfopersonal[7]+"")
    
                a2=a2+10;
                doc2.setTextColor(0, 0, 0);
                doc2.text(20, a2, "Correo Electronico:"+vecinfopersonal[8]+"")
            
                const per2h = await axios.get('http://localhost:8002/Mantenimientos/');
                
                for(var zz=0; zz<(await per2h).data.length; zz++){ 
                if( (await per2h).data[zz].vehiculo === this.props.match.params.placa) {
                //comprobar=(await per2h).data[zz].estado; 
                break; 
                }
                }
                
                if(((await per2h).data[zz].estado)==="no_terminado"){
                window.location.href = '/ErrorTerminadoNoTerminado';      
                }

            if((ppp === 0 || ppp > total) && ((await per2h).data[zz].estado)==="terminado"){  

           doccc.save("InformServiciosUtilizados"+xvi+".pdf")     
            doc2.save("InformeCliente"+xvi+".pdf") 

            a1=a1+10;
            doc.setTextColor(0, 255, 0);
             
            var vvv="";
            var vvv1="";

            if(total>3000000){
            totalservice=totalservice/2 
            vvv1 = (total+totalservice)
            vvv = (vvv1*0.19);
            doc.text(20, a1, "Total a pagar con iva incluido es:"+(vvv1+vvv)+"")
            doc.save("InformeProductos"+xvi+".pdf")    
            }

            else{
            vvv1 = (total+totalservice)
            vvv = (vvv1*0.19);
            doc.text(20, a1, "Total a pagar con iva incluido es :"+(vvv+vvv1)+"")
            doc.save("InformeProductos"+xvi+".pdf")     
            }

               
            }

            if(total > ppp && ppp !== 0){
            window.location.href = '/ErrorFacturacionc';      
            }

           
           
           
            }

       

    render() {
        
        return (
 
            <form onSubmit={this.generatePDF}>
            
            <div className="card">
            <div className="card-header d-flex justify-content-between"></div>
            <Link className="btn btn-secondary" to={"/"}>
                              Ir a Inicio
                             </Link>
                             </div>
                             
            </form>  
             
             
         );
    }
}

/*
<button type="submit" className="btn btn-primary">
            Download PDF
            </button>
*/

/*
 if((await per2).data[j].id_mantenimiento === (await per3).data[k].producto){
            doc.setTextColor(255,0,0);
            doc.text(20, 10, "productos utilizados:"+(per2).data[i].producto+"")
            doc.save('demo.pdf')      
            } 
*/

/*
  var doc = new jsPDF();
            
            const per1 = await axios.get('http://localhost:8002/Mantenimientos/');
            const per2 = await axios.get('http://localhost:8002/Producto_mantenimientos/');
            //const per3 = await axios.get('http://localhost:8002/Producto_mantenimientos/');

            for(var i=0; i<(await per1).data.length; i++){  
            if( (await per1).data[i].vehiculo ===  this.props.match.params.placa) {
            for(var j=0; j<(await per2).data.length; j++){ 
            if((await per1).data[i].id_mantenimiento === (await per2).data[j].id_mantenimiento){
             
            doc.setTextColor(255,0,0);
            doc.text(20, 10, "productos utilizados:"+(per2).data[i].producto+"")
            doc.save('demo.pdf')      
                
            }   
            }
            }
            } 
*/
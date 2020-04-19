//lo que hace rapido a react es el useState
import React, {Fragment, useState } from 'react';
//importar helpers
import { calcularTotal } from '../helpers'



const Formulario = (props) => {

const {cantidad ,guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;


  //Definit useState
  const [error, guardarError] = useState(false); //para tener el mensaje de error


//Cuando el usuario hace submit
const calcularPrestamo = e =>{
  e.preventDefault();

 // console.log('Enviando.........');

 //validar
if(cantidad === 0 || plazo === ''){
  guardarError(true);
  return;
}

guardarError(false);

//HABILITAR SPINNER

guardarCargando(true);


setTimeout(() => {

  //REALIZAR COTIZACION 

//no agregar mucho contigo a un componente por eso creamos el archivo helpers
const total = calcularTotal(cantidad,plazo);

//console.log(total);

//UNA VEZ CALCULADO, guardarTotal
guardarTotal(total);

//DESABILITAR SPINNER

guardarCargando(false);

}, 3000);

 
}





return(

  <Fragment>
<form onSubmit={ calcularPrestamo}>

          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      //react trabaja con eventos ---ponemos onChange porque queremos escuchar todo ---similar a un eventListener
                      onChange = { e => guardarCantidad( parseInt(e.target.value)) }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                        onChange = { e => guardarPlazo( parseInt(e.target.value)) }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>

  {(error) ?   <p className="error">*Todos los campos son Obligatorios</p> : null}

  
  </Fragment>
);
  
}
  export default Formulario;
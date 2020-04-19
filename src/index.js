//pagina principal donde ponemos lo que queremos mostrar
//aqui ponemos las etiquetas de los componentes

import React, { Component } from 'react';
import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
//importar componente
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';

import Spinner from './componentes/Spinner';

function App(){
 
  
//Definir el state --- permite tener en esta clase y tambien pasar a otros componentes
const [cantidad, guardarCantidad] = useState(0);
const [plazo, guardarPlazo] = useState('');
const [total , guardarTotal] = useState(0);
const [cargando , guardarCargando] = useState(false);



let componente;

if(cargando){
componente = <Spinner/>
}else if( total === 0){ 
  componente = <Mensaje/>
}else{
  componente = <Resultado
         total = {total}
         plazo = {plazo}
         cantidad = {cantidad}
  
  />
}

     //mandar llamar un componente
     //se utiliza fragmente para haer HTML extra
    return (
    <Fragment>
   
       <Header
       titulo ="Cotizador de Prestamos"
       />
       <div className="container">
        <Formulario
            cantidad = {cantidad}
            guardarCantidad = {guardarCantidad}
            plazo = {plazo}
            guardarPlazo = {guardarPlazo}
            guardarTotal = {guardarTotal}
            guardarCargando = {guardarCargando}
        />
      
      <div className="mensajes">
          {componente}
      </div>
   
        
       </div>
      
     </Fragment>
   
    );
  
}

render(<App />, document.getElementById('root'));

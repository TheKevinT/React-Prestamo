import React from 'react';
//import React, { Fragment } from 'react';


//para leer valor de otros lados se utiliza props
/*function Header({titulo}){

//console.log(props);
//se utiliza las llaves para mostrar la varible
//se utiliza fragmente para haer HTML extra
return(
    <Fragment>
    
      <h1>{ titulo }</h1>
    
    
    
    </Fragment>
);*/

const Header = ({titulo}) => (
     // <Fragment>
    
      <h1>{ titulo }</h1>
    
   // </Fragment>
  );


//}
//poner siempre esto cuando creamos un componente
export default Header;
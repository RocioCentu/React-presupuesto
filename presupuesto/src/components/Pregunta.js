import React,{Fragment, useState} from 'react';
import Error from './Error';
const Pregunta = ({actualizarPregunta,guardarPresupuesto, actualizarRestante}) => {
    // crear state de error
    const [error,actualizarError] = useState(false);
    //definir state
    const [cantidad, guardarCantidad ]= useState(0);
    //funcion que leee presupuesto 
    const definirPresupuesto= e =>{
  
      guardarCantidad(parseInt(e.target.value,10));

    }
    //submit para definir presupuesto
    const agregarPresupuesto= e =>{
        e.preventDefault();

        //validar
        if(cantidad === ''){
            actualizarError(true);
            return;
    }
           if(cantidad<1){
               actualizarError(true);
               return;
           }
           if(isNaN(cantidad)){
            actualizarError(true);
            return;
            
        }
        

           actualizarError(false);
        //si se pasa la validacion
        guardarPresupuesto(cantidad);
        actualizarRestante(cantidad);
        actualizarPregunta(false);

    }
    return ( 
<Fragment>
    <h2>Coloca tu presupuesto</h2>
    {error ? 
    <Error
    mensaje="el presupuesto es incorrecto"
    />
    :
    null
    }
    <form
    onSubmit={agregarPresupuesto}
    >
       
        <input
          type="number"
          className=""
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className=""
          value="Definir presupuesto"
        />
    </form>
</Fragment>

     );
}
 
export default Pregunta;
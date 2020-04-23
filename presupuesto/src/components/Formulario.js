import React ,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarCrearGasto,actualizarGasto}) => {
    const [nombre,guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);

//agregar gatos
const agregarGasto = e => {
 e.preventDefault();

 //validar
 if(cantidad < 1 || isNaN(cantidad) ){
     guardarError(true);
     return;
 }

 if( nombre.trim() ===''){
    guardarError(true);
    return;
}
 guardarError(false);

 //contruir gasto pasandole gasto y cantidad obtenidos
   const gasto={
       nombre ,
       cantidad ,
       id:shortid.generate()
   }
 //pasar el gasto al componente principal
 actualizarGasto(gasto);
 guardarCrearGasto(true);
 //resetaer el form
 guardarNombre('');
 guardarCantidad(0);
}
    return ( 
<form
onSubmit={agregarGasto}
>
<h2>Agregar tus gastos aqui</h2>

{error ? 
    <Error
mensaje="Ambos campos son obligatorio o presupuesto incorrecto"
/>

: null}

   <div className="">
       <label>Nombre Gasto</label>
       <input
        type="text"
        className=""
        placeholder="Ej. Transporte"
        value={nombre}
        onChange={e => guardarNombre (e.target.value)}
       />
   </div>

   <div className="">
       <label>Cantidad Gasto</label>
       <input
        type="number"
        className=""
        placeholder="Ej. 300"
        value={cantidad}
        onChange={e => guardarCantidad (parseInt(e.target.value ,10))}
       />
   </div>

   <input
        type="submit"
        className=""
        value="Agregar gasto"
       />
</form>

     );
}
 
export default Formulario;
import React from 'react';
import Gasto from './Gasto';
const Listado = ({gastos}) => (
    <div>
   <h2>Listado</h2>
     {gastos.map( gasto=> (
       <Gasto
       key={gasto.id}
       gasto={gasto}
       />
   ))}
   </div>
);
 
export default Listado;
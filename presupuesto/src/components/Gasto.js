import React from 'react';
const Gasto = ({gasto}) => {
    return (
        <div>
            <p>
               Nombre: {gasto.nombre}
             <span>${gasto.cantidad}</span>
            </p>
        </div>
      );
}
 
export default Gasto;
import React ,{useState,useEffect}from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

import './App.css';

function App() {
  // crear state 
  const [gastos,guardarGasto] = useState([]);
   const [presupuesto,guardarPresupuesto] = useState(0);
  const [restante,actualizarRestante] = useState(0);
  const [mostrarPregunta,actualizarPregunta] = useState(true);
  const [gasto,actualizarGasto] = useState({});
  const [creargasto,guardarCrearGasto] = useState(false);
 // actualizar restante 
 useEffect(()=> {
  
   //agrega el nuestro presupuesto
    if(creargasto){
      guardarGasto([
        ...gastos,
        gasto
      ]);

       // resta el  restante
    


     guardarCrearGasto(false);
    }
   
    const presupuestoRestante= restante - gasto.cantidad;
    actualizarRestante(presupuestoRestante);
    
   
   },[gasto]);
  
  

 
  return (
   <div className="">
        <header>
          <div>
          <h2>Gasto semanal</h2>
          {mostrarPregunta ?
          (
          <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          actualizarRestante={actualizarRestante}
          actualizarPregunta={actualizarPregunta}
          />
          ): (
            <div>
            <div>
              <Formulario 
              actualizarGasto={actualizarGasto}
              guardarCrearGasto={guardarCrearGasto}
              />
            </div>

            <div>
              <Listado
               gastos={gastos}
              />
              <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}/>
            </div>
          </div>
          )}
           </div>

         
        </header>
   </div>
  );
}

export default App;

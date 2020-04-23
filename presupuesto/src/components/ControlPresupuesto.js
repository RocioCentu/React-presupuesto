import React,{Fragment} from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div>
              Presupuesto= ${presupuesto}
            </div>

            <div>
                Restante=${restante}
            </div>

        </Fragment>

     );
}
 
export default ControlPresupuesto;
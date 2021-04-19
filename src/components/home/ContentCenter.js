import React from 'react'
import './ContentCenter.css'

import { useSelector } from 'react-redux';
import { TemasEntry } from '../temas/TemasEntry';

export const ContentCenter = () => {

    const temas = useSelector(state => state.tema);
    let objTemas = {};

    if (temas?.temas) {
      objTemas = Object.values(temas.temas);
    }
  
    const validInfoTema = Object.entries(objTemas).length === 0;    


    return (
        <>
		

<div className="card">
  <div className="card-body">
  	<h1 className="text-center" >Ultimos Temas creados </h1>
  </div>

  <div className="my-3 p-3 bg-body rounded shadow-sm">

{

  /* 
  *************************************
  [INIT] TEMAS PROPIOS DEL USUARIO  
  *************************************
  */

  !validInfoTema &&


  objTemas.map(t => (
    <TemasEntry
      key={t.id}
      {...t}
    />
  ))

}

</div>

{validInfoTema &&
<div>
  <br />
  <div className="alert alert-warning text-center" role="alert">
    Sin informacion.
    </div>
</div>

/* 
*************************************
[END] TEMAS PROPIOS DEL USUARIO  
*************************************
*/
}



</div>		

<div className="my-3 p-3 bg-body rounded shadow-sm">
</div>
        </>
    )
}

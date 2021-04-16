import React from 'react'
import './ContentCenter.css'

import { useDispatch, useSelector } from 'react-redux';
import { TemasEntry } from '../temas/TemasEntry';
import { loadTemas } from '../../helpers/loadTemas'



export const ContentCenter = () => {
	const dispatch =useDispatch();
	const temas = loadTemas();
	
	temas.then(
		r => {
			
			let divTemasMain = document.getElementById('divTemasMain');
			divTemasMain.innerHTML = "";

			
			if(r.length>0){

				for (var i=0; i<r.length; i++)
				{

					// console.log(r);

					divTemasMain.innerHTML+=`
					<div class="alert alert-secondary cursor: pointer;" onClick={handleEntryClick} role="alert">
					<img src="../assets/image/avatar7.png " style="width:50px;" class="img-thumbnail" alt="..." />
						<strong>${r[i].titulo}</strong> de usuario
					</div>
					`;
				}


			}else{

				divTemasMain.innerHTML=`<div>
				<div class="alert alert-warning text-center" role="alert">
				Sin informacion.
				</div>
				</div>`;

			}


			const handleEntryClick = () => {

				console.log("asd");
				
						// dispatch(
						//     activeTema(id, {
						//         titulo,
						//         date,
						//         descripcion,
						//         status,
						//         url
						//     })
						// );
				
						// history.push("/tema");
					}

		}
		);



	// dispatch( starLoadingTemas());

	// const temas = useSelector(state => state.tema);
	// let objTemas = {};

	// if (temas?.temas) {
	// 	objTemas = Object.values(temas.temas);
	//   }
	//   const validInfoTema = Object.entries(objTemas).length === 0;
	


    return (
        <>
		

<div className="card">
  <div className="card-body">
  	<h1 className="text-center">Ultimos Temas creados </h1>
  </div>
</div>		

<div className="my-3 p-3 bg-body rounded shadow-sm">
		<div id="divTemasMain"></div>
</div>

        </>
    )
}

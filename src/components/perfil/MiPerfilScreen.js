import './MiPerfilScreen.css';

import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { NothingMessageScreen } from '../nothing/NothingMessageScreen';
import { loadUserById } from '../../helpers/loadUser';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import Swal from 'sweetalert2';
import { MiPerfilForm } from './MiPerfilForm';


export const MiPerfilScreen = () => {
	const history = useHistory();
	const id = useParams();
	const active= true;
	// const usuario = loadUserById(id).then(
	// 	r => {
	// 		return r;
	// 	}
	// );

	function Example() {
		useEffect(function () {
		  console.log('render!')
		})
	}


			 // document.getElementById("h5-user-name").innerHTML = r.nombre;
		 // document.getElementById("h6-email").innerHTML = r.email;
		 // document.getElementById("p-about").innerHTML = r.about;
		 // document.getElementById("fullName").value = r.nombre;
		 // document.getElementById("email").value = r.email;
 
		 //   if(r.photoUrl!==null){
		 // 	document.getElementById("myImg").src = r.photoUrl;
		 //   }
  

	   	 


   const [crumbs] = useState(['Home', 'Perfil']);
   const selected = crumb => {
    if(crumb==="Home"){
		history.push("/");
	}
  }

	return (
		<>
			<BreadcrumbScreen crumbs={crumbs} selected={selected} />
			{
				(!active)
					?
					<NothingMessageScreen />
					:

					<div className="container">
						<div className="row gutters">
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
								<div className="card h-100">
									<div className="card-body">
										<div className="account-settings">
											<div className="user-profile">
												<div className="user-avatar">
													<img id="myImg" src="../assets/image/avatar7.png" alt="Usuario" />
												</div>
												<h5 id="h5-user-name" className="user-name">Usuario</h5>
												<h6 id="h6-email" className="user-email">Email</h6>
											</div>
											<div className="about">
												<h5>Acerca de </h5>
												<p id="p-about"></p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
								<div className="card h-100">
									 <MiPerfilForm usuario = "asd" />
								</div>
							</div>
						</div>
					</div>

			}



		</>
	)
}

import './MiPerfilScreen.css';

import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { NothingMessageScreen } from '../nothing/NothingMessageScreen';
import { loadUser } from '../../helpers/loadUser';
import { useForm } from '../../hooks/useForm';

export const MiPerfilScreen = () => {

	const id = useParams();

	const active= true;
	
    const [ formValues, handleInputChange ] = useForm({
        
		fullName: "",
		email: "",
		password: '',
		repassword: "",
   })

   const { fullName, email, password, repassword } = formValues;


	   loadUser(id).then(
		   function(value) {
			   loaded(value)
			  // console.log(value);
			  
		}
	   );



   function loaded(some) {

		document.getElementById("h5-user-name").innerHTML = some[0].nombre;
		document.getElementById("h6-email").innerHTML = some[0].email;
		document.getElementById("p-about").innerHTML = some[0].about;
		
	  	document.getElementById("fullName").value = some[0].nombre;
	  	document.getElementById("email").value = some[0].email;

		  if(some[0].photoUrl!==null){
			document.getElementById("myImg").src = some[0].photoUrl;
	  	}
	  



   }
	






	
    return (
        <>

		{
			( !active )
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






	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Datos personales</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">Nombre completo</label>
					<input type="text" 
							className="form-control" 
							id="fullName"							  
							 placeholder="Enter full name"
							 name="fullName"
							 value={fullName}
							 onChange={ handleInputChange } />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" 
							className="form-control" 
							id="email" 
							placeholder="Enter email ID" 
							name="email"
							value={email}
							onChange={ handleInputChange }/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" 
							className="form-control" 
							id="password" 
							placeholder="Enter password"
							name="password"
							value={password}
							onChange={ handleInputChange } />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="password">Repite Password</label>
					<input type="password" 
							className="form-control" 
							id="repassword" 
							placeholder="Enter re-password"
							name="repassword"
							value={repassword}
							onChange={ handleInputChange } />
				</div>
			</div>
		</div>
        <br/>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="d-grid gap-2">
                    <button type="button" id="submit" name="submit" className="btn btn-outline-danger">Actualizar</button>
					<Link type="button" className="btn btn-outline-secondary" to={`/home`}>Cancel</Link>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>     

		}

   
               
        </>
    )
}

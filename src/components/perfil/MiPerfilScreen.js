import './MiPerfilScreen.css';

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { NothingMessageScreen } from '../nothing/NothingMessageScreen';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateUser } from '../../helpers/loadUser';



export const MiPerfilScreen = () => {
	const history = useHistory();
	let active = true;

	let usuario = useSelector(state => state.usuario);
	let auth = useSelector(state => state.auth);
	
	if(usuario.active===null){
		window.location.href = "/";
		active = false;
	}

	const [datos, setDatos] = useState({
		about : usuario?.active.about,
		fullName: usuario?.active.nombre,
		fono: usuario?.active.fono,
		admin: (usuario?.active.admin === true) ? true : false,
	})

	const handleInputChange = (e) => {
			setDatos({
				...datos,
				[e.target.name] : e.target.value
			})
	}

	const actualizarUsuario = (e) => {
		e.preventDefault();

		Swal.fire({
			title: 'Do you want to save the changes?',
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: `Save`,
			denyButtonText: `Don't save`,
		}).then((result) => {
			if (result.isConfirmed) {
				updateUser(datos, usuario.active.uid);
				Swal.fire({
					icon: 'success',
					title: 'Updated',
				})
			}
		})

    }

	const [crumbs] = useState(['Home', 'Perfil']);
	const selected = crumb => {
		if (crumb === "Home") {
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
					<form onSubmit={actualizarUsuario}>
					<div className="container">
						<div className="row gutters">
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
								<div className="card h-100">
									<div className="card-body">
										<div className="account-settings">
											<div className="user-profile">
												<div className="user-avatar">
													<img id="myImg" src={(usuario?.active.photoUrl===null) ? "../assets/image/avatar7.png" : usuario?.active.photoUrl} alt="Usuario" />
												</div>
												<h5 id="h5-user-name" className="user-name">{usuario?.active.nombre}</h5>
												<h6 id="h6-email" className="user-email">{usuario?.active.email}</h6>
											</div>
											<div className="about">
												<h5>Acerca de </h5>
												<p>{datos.about}</p>
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
														placeholder="Enter nombre completo"
														name="fullName"	
														value={datos.fullName}
														onChange={handleInputChange} />
												</div>
											</div>
											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
												<div className="form-group">
													<label htmlFor="eFono">Celular</label>
													<input type="number"
														className="form-control"
														id="fono"
														placeholder="Enter Celular "
														name="fono"
														value={datos.fono}
														onChange={handleInputChange} />
												</div>
											</div>
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
												<div className="form-group">
													<label htmlFor="about">Acerca de</label>
													<textarea
														id="about"
														name="about"
														placeholder="about me"
														className="form-control"
														value={datos.about}
														onChange={handleInputChange} 
													/>
												</div>
											</div>
											{(auth.admin) &&
												<>
													<br/><br/><br/><br/>
													<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
													<div className="form-group">
													<div className="alert alert-warning" role="alert">		
														<strong><label htmlFor="about">Administrador </label></strong> <small> (cuidado con esta opción)</small>														
														<select 
														id="admin"
														name="admin"
														className="form-select form-select-sm" 
														value={datos.admin} 
														onChange={handleInputChange} 
														>
															<option value={true}>Si</option>
															<option value={false}>No</option>
														</select>
														</div>
													</div>
													</div>	
												</>
											}										
										</div>
										<br />
										<div className="row gutters">
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
												<div className="d-grid gap-2">
													<button type="submit" id="submit" name="submit" className="btn btn-outline-danger  btn-sm">Actualizar</button>
													<Link type="button" className="btn btn-outline-secondary  btn-sm" to={`/home`}>Cancel</Link>
												</div>
												<br />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</form>
			}
		</>
	)
}

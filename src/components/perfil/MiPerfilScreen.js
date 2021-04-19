import './MiPerfilScreen.css';

import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { NothingMessageScreen } from '../nothing/NothingMessageScreen';
import { loadUserById } from '../../helpers/loadUser';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const MiPerfilScreen = () => {
	const history = useHistory();
	const id = useParams();
	const active = true;

	const usuario = useSelector(state => state.usuario);

	if(usuario.active===null){
		active = false;
	}

	const [formValues, handleInputChange] = useForm({

		fullName: usuario.active.nombre,
		fono: "asdsad",
		password: '',
		repassword: "",
		
	})

	const { fullName, fono, password, repassword } = formValues;

	const handleActualizarInfo = () => {
		Swal.fire('Any fool can use a computer')
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

					<div className="container">
						<div className="row gutters">
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
								<div className="card h-100">
									<div className="card-body">
										<div className="account-settings">
											<div className="user-profile">
												<div className="user-avatar">
													<img id="myImg" src={`${usuario.active.photoUrl}`} alt="Usuario" />
												</div>
												<h5 id="h5-user-name" className="user-name">{usuario.active.nombre}</h5>
												<h6 id="h6-email" className="user-email">{usuario.active.email}</h6>
											</div>
											<div className="about">
												<h5>Acerca de </h5>
												<textarea id="about" name="about">
													{usuario.active.about}
												</textarea>
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
														value={fono}
														onChange={handleInputChange} />
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
														onChange={handleInputChange} />
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
														onChange={handleInputChange} />
												</div>
											</div>
										</div>
										<br />
										<div className="row gutters">
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
												<div className="d-grid gap-2">
													<button type="submit" id="submit" name="submit" className="btn btn-outline-danger">Actualizar</button>
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

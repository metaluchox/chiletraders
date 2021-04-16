import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export const MiPerfilForm = (usuariox) => {
    

    console.log(usuariox);


    const [ formValues, handleInputChange ] = useForm({
        
		fullName: "",
		email: "",
		password: '',
		repassword: "",
   })

   const { fullName, email, password, repassword } = formValues;

    return (
        <>
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
                            <label htmlFor="eMail">Email</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email ID"
                                name="email"
                                value={email}
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
                            <button type="button" id="submit" name="submit" className="btn btn-outline-danger">Actualizar</button>
                            <Link type="button" className="btn btn-outline-secondary" to={`/home`}>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

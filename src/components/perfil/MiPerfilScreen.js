import React from 'react'
import './MiPerfilScreen.css';

export const MiPerfilScreen = () => {
    return (
        <>

<div className="container">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
				</div>
				<h5 className="user-name">Yuki Hayashi</h5>
				<h6 className="user-email">yuki@Maxwell.com</h6>
			</div>
			<div className="about">
				<h5>About</h5>
				<p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
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
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Enter password" />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Enter re-password" />
				</div>
			</div>
		</div>
        <br/>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="d-grid gap-2">
                    <button type="button" id="submit" name="submit" className="btn btn-primary">Actualizar</button>
					<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>        
               
        </>
    )
}

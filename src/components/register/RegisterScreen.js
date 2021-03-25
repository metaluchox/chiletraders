import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {

    return (
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 py-5 register-custom_ct text-white text-center ">
                            <div className=" ">
                                <div className="card-body">
                                    <img src="../../assets/image/chiletraderslogosinfondo.png"
                                    width="30%"
                                    id="logo"
                                    alt="Chile traders"
                                    className="register__image" />
                                    
                                    <h2 className="py-3">Registration</h2>
                                    <p>Tation argumentum et usu, dicit viderer evertitur te has.
                                    Eu dictas concludaturque usu, facete detracto patrioque an per,
                                    lucilius pertinacia eu vel.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 py-5 border">
                            <h4 className="pb-4">Please fill with your details</h4>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="Full Name" name="Full Name" placeholder="Full Name"
                                            className="form-control" type="text" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-danger">Registrarse</button>
                                    <br />
                                    <Link to="/login" className="btn btn-primary"> Volver </Link>                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

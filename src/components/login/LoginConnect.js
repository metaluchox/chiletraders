import React  from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { ResetPassword } from './ResetPassword';

export const LoginConnect = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email:'',
        password: ''
    })

    const { email, password } = formValues;

    const ingresar = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword ( email, password ) );
        // history.replace(lastPath);
    }

    const ingresarByGoogle = () =>{
        dispatch( startGoogleLogin() );
    }



    return (
        <>
            <div className="modal-dialog modal-login">
                <div className="modal-content">
                    <form onSubmit={ ingresar } method="post">
                        <div className="modal-header">
                            <Link to="/" >
                            <img className="register__image" id="logo" src="../../assets/image/chiletraderslogoStandar.png"
                                width="270px"
                                alt="Chile Traders" />
                            </Link>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={email}
                                onChange={ handleInputChange }  
                                name="email"                                  
                                required="required" />
                            </div>
                            <div className="form-group">
                                <div className="clearfix">
                                    <label>Password</label>
                                </div>

                                <input 
                                type="password" 
                                className="form-control" 
                                value={password}
                                onChange={ handleInputChange }    
                                name="password" 
                                required="required" />
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <input type="button" className="btn btn-primary" 
                            onClick={ingresar}
                            disabled={ loading }
                            value="Iniciar sesión" />
                            <Link onClick={ ingresarByGoogle } className="btn btn-danger" to="">                                
                                <i className="bi bi-google text-center"></i>  Ingresa con <b>Google</b>
                            </Link>
                            <Link to="/register" className="text-center link" > <i className="bi bi-person-circle"></i> No tiene cuenta </Link>
                            <ResetPassword />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

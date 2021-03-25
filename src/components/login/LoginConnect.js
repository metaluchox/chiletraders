import React /*, { useContext }*/ from 'react'
import { Link /*, useHistory*/ } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

export const LoginConnect = () => {

    // const history = useHistory();
    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );


    const [ formValues, handleInputChange ] = useForm({
        email:'luis@asd.cl',
        password: '0303456'
    })

    const { email, password } = formValues;

    // const { dispatch } = useContext(AuthContext);


    const ingresar = (e) => {
        e.preventDefault();
        // const lastPath = localStorage.getItem('lastPath') || '/';
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

                            <img className="register__image" id="logo" src="../../assets/image/chiletraderslogoStandar.png"
                                width="270px"
                                alt="Chile Traders" />

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
                            <input type="button" className="btn btn-danger" 
                            onClick={ingresar}
                            disabled={ loading }
                            value="Login" />

                            <div className="google-btn"
                                onClick={ ingresarByGoogle } >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                            <Link to="/register" className="text-center" > <i className="bi bi-person-circle"></i> No tiene cuenta </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

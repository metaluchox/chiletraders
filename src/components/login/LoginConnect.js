import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginConnect = () => {

    const history = useHistory();
    const { dispatch } = useContext(AuthContext);

    const ingresar = (e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Metaluchox'
            }
        })

        history.replace(lastPath);

    }

    return (
        <>
            <div className="modal-dialog modal-login">
                <div className="modal-content">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <div className="modal-header">

                            <img className="register__image" id="logo" src="../../assets/image/chiletraderslogoStandar.png"
                                width="270px"
                                alt="Chile Traders" />

                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" required="required" />
                            </div>
                            <div className="form-group">
                                <div className="clearfix">
                                    <label>Password</label>
                                </div>

                                <input type="password" className="form-control" required="required" />
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <input type="submit" className="btn btn-danger" onClick={ingresar} value="Login" />

                            <div className="google-btn" >
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

import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError} = useSelector( state => state.ui );
  
    const [ formValues, handleInputChange ] = useForm({
        
        nombre: 'luis',
        email:'luis@asd.cl',
        password: '0303456',
        repassword: '0303456'
    })


    const { nombre, email, password, repassword } = formValues;


    const registrar = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterEmailPassword(email, password, nombre))
        };

            

        // const lastPath = localStorage.getItem('lastPath') || '/';
        // dispatch( startLoginEmailPassword ( email, password ) );

        // history.replace(lastPath);

    }


    const isFormValid = () =>{

        if(nombre.trim().length===0){
            dispatch(setError("el nombre es vacio"));
            return false;
        } else if (!isEmail(email) ){
            dispatch(setError("el email es incorrecto"));
            return false;
        }else if(password !== repassword || password.length < 5){
            dispatch(setError("El password es incorrecto o es menor a 5"));

                return false;
        }

        dispatch(removeError())

        return true;
        
    }

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



{/* 

 INIT PARTE FORMULARIO REGISTRRO

*/}





                        <div className="col-md-8 py-5 border">                            
                            <h4 className="pb-4">Please fill with your details</h4>

                    {msgError &&
                        (
                            <div className="alert alert-danger text-center" role="alert">
                                {msgError}
                            </div>
                        )

                    }

                            


                            <form onSubmit={ registrar } method="post">
                                <div className="form-row">

<div className="container">
  <div className="row">
    <div className="col-md-6">
        <input id="nombre" 
        name="nombre" 
        placeholder="Nombre Completo" 
        className="form-control" 
        type="text" 
        value={nombre}
        onChange={ handleInputChange } 
        />
        <br/>
    </div>
    <div className="col-md-6">
        <input type="email" className="form-control" id="email" 
        name="email"  placeholder="Email" 
        value={email}
        onChange={ handleInputChange } 
        />
        <br/>
    </div>
   
    <div className="col-md-6">
        <input type="password" className="form-control" id="password"
         name="password" placeholder="Ingrese password" 
         value={password}
         onChange={ handleInputChange }
         />
        <br/>
    </div>
    <div className="col-md-6">
        <input type="password" className="form-control" id="repassword" 
        name="repassword" 
        placeholder="Ingrese nuevamente el password"
        value={repassword}
        onChange={ handleInputChange }
        />
        <br/>
    </div>  
    <div className="col-md-12">
        <div className="d-grid gap-2">
        <button type="button" className="btn btn-danger" onClick={registrar}>Registrarse</button>
        </div>
        <br/>
    </div>      
    <div className="col-md-12">
        <div className="d-grid gap-2">
            <Link to="/login" className="btn btn-link"> Volver </Link>  
        </div>
        <br/>
    </div>             
  </div>
</div>




                                </div>
                                <div>
                                    
                                    <br />
                                                                  
                                </div>
                            </form>
                        </div>


{/* 

 END PARTE FORMULARIO REGISTRRO

*/}




                    </div>
                </div>
    )
}

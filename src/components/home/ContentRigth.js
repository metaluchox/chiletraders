import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { startLogout } from '../../actions/auth';
import { temaLogout } from '../../actions/temas';
import { LoginConnect } from '../login/LoginConnect';

export const ContentRigth = ( request ) => {
  const history = useHistory();
  const dispatch =useDispatch();

  const salirApp = () =>{

    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startLogout());
        dispatch( temaLogout());
        history.push("/login");
      }
    })

  }

  return (
    <>
      {
        ( request.isLogged!==true &&  <LoginConnect /> )        
      }
      {
       ( request.isLogged===true &&  
        <div className="d-grid gap-2">
            <button className="btn btn-danger"  onClick={salirApp} type="button"><i className="bi bi-power"> Cerrar sesión</i></button>
            <br />
        </div>   
      ) 
      }


    </>
  )
}

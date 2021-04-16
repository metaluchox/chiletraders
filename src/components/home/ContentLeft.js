import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { useSelector } from 'react-redux';


import Swal from 'sweetalert2';
import { DolarScreen } from '../monedas/DolarScreen';
import { UfScreen } from '../monedas/UfScreen';

export const ContentLeft = ( request ) => {

  
  const {uid}  = useSelector( state => state.auth );

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
          dispatch( startLogout() );
          history.push("/login");
      }
    })

  }

    return (
        <>
        
        {
        
          (request.isLogged===true) &&  (    

            <div>
              <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary"  as={Link} to={`/miPerfil/${uid}`}><i className="bi bi-person-circle"> Perfil </i></Link>
              </div>  
              <br/>
              <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary"  as={Link} to="/crearTema" ><i className="bi bi-bookmark-star"> Crear Tema </i></Link>
              </div>  
              <br/>
            <div className="d-grid gap-2">
              <Link className="btn btn-outline-danger" onClick={salirApp} to="" ><i className="bi bi-power"> Cerrar sesión</i></Link>
            </div>            
            <br/>
            </div>
            
          ) 
        }


      <p className="text-center"><strong>ARTÍCULOS DE OPINIÓN</strong></p>
      <DolarScreen/>
      <UfScreen />
      <DolarScreen/>
      <UfScreen />      

        </>
    )
}

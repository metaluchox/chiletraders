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
      <div className="col">
      {
        ( request.isLogged!==true &&  <LoginConnect /> )        
      }
      {
       ( request.isLogged===true &&  
        <div className="d-grid gap-2">
            <button className="btn btn-danger"  onClick={salirApp} type="button">Cerrar sesión</button>
            <br />
        </div>   
      ) 
      }
  
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <img alt="Coca cola"
            src="https://i.blogs.es/b17cc2/blockchain-3446557_1280/450_1000.jpg" width="100%" />
        </div>
      </div>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <script data-ad-client="ca-pub-9540553176969950" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </div>          
        </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <script data-ad-client="ca-pub-9540553176969950" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
      </div>

    </>
  )
}

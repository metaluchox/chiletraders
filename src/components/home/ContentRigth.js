import React from 'react'
import { LoginConnect } from '../login/LoginConnect'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const ContentRigth = ( request ) => {
  
  const history = useHistory();
  const dispatch =useDispatch();

  const salirApp = () =>{

    dispatch( startLogout() );

    history.push("/login");
  }



  return (
    <>
      <div className="col">
      {
        ( request.isLogged!==true &&  <LoginConnect /> ) || 
        <div className="d-grid gap-2">
          <button className="btn btn-danger" type="button" onClick={salirApp} ><i className="bi bi-power"> Cerrar sesión</i></button>
          <br/>
        </div>
        
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
            <img alt="Coca cola"
              src="http://www.latinspots.com/files/galerias/CocaColaFrases_1_Grey_gal_g.jpg" width="100%" />
          </div>          
        </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <img alt="Coca cola"
            src="https://www.grupoendor.com/wp-content/uploads/2018/01/tesla-un-estandarte-de-excelencia.jpg" width="100%" />
        </div>
      </div>

    </>
  )
}

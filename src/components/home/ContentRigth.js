import React from 'react'
import { LoginConnect } from '../login/LoginConnect'

export const ContentRigth = ( request ) => {


  return (
    <>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <img alt="Coca cola"
            src="http://www.latinspots.com/files/galerias/CocaColaFrases_1_Grey_gal_g.jpg" width="100%" />
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <img alt="Coca cola"
            src="https://i.blogs.es/b17cc2/blockchain-3446557_1280/450_1000.jpg" width="100%" />
        </div>
      </div>

      <div className="col">

      {
        request.isLogged!==true && <LoginConnect /> 
      }


          
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

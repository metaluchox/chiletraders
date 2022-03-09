import React from 'react'
export const Footer = () => {  
  return (
    <>   
    <div className="mt-5"></div>
      <footer className="pt-2 my-md-2 pt-md-2 border-top text-white-50 bg-primary navbar-dark fixed-bottom">
    <div className="row">
      <div className="col-6 col-md text-center">
        Sobre <br/> Gafa
      </div>
      <div className="col-6 col-md text-center">
        Redes social
        <ul className="list-unstyled text-small" style={{cursor:"pointer"}} >
        <li className="mb-1">
          <i className="bi bi-telegram mb-10"></i> <i className="bi bi-twitter"></i> <i className="bi bi-facebook"></i> <i className="bi bi-instagram"></i> <i className="bi bi-youtube"></i>
        </li>
        </ul>        
      </div>
      <div className="col-6 col-md imagenToro">
         
      </div>
    </div>
  </footer>
    </>
  )
}

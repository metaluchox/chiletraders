import React from 'react'
import Swal from 'sweetalert2';

export const ContentLeft = ( request ) => {

  const implementar = () =>{
    Swal.fire('Implementar')

  }

    return (
      <>
        <div className="card bg-light text-dark border-primary mb-3 text-center" style={{ cursor: "pointer" }} onClick={implementar}>
          <img src="../../assets/image/wall-street-toro-rect.jpg" className="card-img" alt="..." style={{ opacity: "0.3" }} />
          <div className="card-img-overlay">
            <h5 className="card-title">Flash de marcado</h5>
            <p className="card-text">Last updated 3 mins ago</p>
            <hr />
            <p className="mb-0">Ver más <i className="bi bi-zoom-in"></i></p>            
          </div>
        </div>

        <div className="alert alert-primary text-center" role="alert" style={{ cursor: "pointer" }} onClick={implementar}>
          <h4 className="alert-heading">Crónicas</h4>
          <p className="mb-0"> title and make up the bulk of the card's content.</p>
          <hr />
          <p className="mb-0">Ver más <i className="bi bi-zoom-in"></i></p>
        </div>

        <div className="alert alert-primary text-center" role="alert" style={{ cursor: "pointer" }} onClick={implementar}>
          <h4 className="alert-heading">Artículos de opinión</h4>
          <p className="mb-0"> title and make up the bulk of the card's content.</p>
          <hr />
          <p className="mb-0">Ver más <i className="bi bi-zoom-in"></i></p>
        </div>
      </>
    )
}

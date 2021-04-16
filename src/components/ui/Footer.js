import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="alert alert-warning text-center" role="alert">
        Informativo 
      </div>    
      <footer className="text-muted py-5 text-white-50 footer-custom_ct">
        <div className="container">
          <div className="row">
            <div className="col">
              Chile Traders av. asdasdasd
            </div>
            <div className="col">
              Redes sociales y otros
            </div>
            {/* <div className="col">
              <img id="logo" src="../../assets/image/taurusandbear.png"
                width="270px"
                alt="Chile Traders" />

            </div> */}
          </div>
        </div>
      </footer>
    </>
  )
}

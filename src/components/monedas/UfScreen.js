import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

export const UfScreen = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

                
<div className="alert alert-primary text-center border border-primary" role="alert" onClick={handleShow}>
                
                <div className="container">
                  <div className="row">
                    <div className="col-sm-2 text-center"><h1><i className="bi bi-cash"></i></h1></div>
                    <div className="col-sm-10">
                      <div className="row">
                        <div className="col-sm-12"><strong>Dolar</strong></div>
                        <div className="col-sm-12"><h3>$750</h3></div>
                      </div>
                    </div>
                    <div className="col-sm-12">Saber mas</div>
                  </div>
                </div>
                      
                      
                      {/* Valor Dolar <br /><strong>$700</strong> */}
              </div>
  
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w "
        className="animate__lightSpeedOutLeft"
        aria-labelledby="example-custom-modal-styling-title"
      >
 
          <Modal.Body>
          <div className="row">
            <div className="alert alert-secondary" role="alert">
              <div className="row">
                <div className="col-sm-12 text-center"><h3><i className="bi bi-cash"></i> Dolar $750</h3></div>
                <div className="col-sm-12"><input className="form-control" /></div>
              </div>
            </div>
            
              <div className="col-sm-3 alert alert-secondary" role="alert">
                $500 CLP
              </div>
              <div className="col-sm-3 alert alert-secondary" role="alert">
                $500 UF
              </div>
              <div className="col-sm-3 alert alert-secondary" role="alert">
                $500 EURO
              </div>
              <div className="col-sm-3 alert alert-secondary" role="alert">
                $500 UTM
              </div>                                                
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary" type="button">Cerrar</button>
            </div>



          </Modal.Body>
      </Modal>

      </>
    );
}

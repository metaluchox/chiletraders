import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

export const DolarScreen = () => {
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
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
      </>
    );
}

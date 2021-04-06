import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TemasEntry } from './TemasEntry'
import Swal from 'sweetalert2';

export const ListarTemaScreen = () => {

  const temas = useSelector(state => state.tema);
  const history = useHistory();

  let objTemas = {};

  if (temas?.temas) {
    objTemas = Object.values(temas.temas);
  }

  const validInfoTema = Object.entries(objTemas).length === 0;

  const crearTema = () =>{

    Swal.fire({

      title: 'Cargando...',
      text: 'Espere un momento.',
      showConfirmButton: false,
      allowOutsideClick: false,
          willOpen : () => {
              Swal.showLoading();
          }
    });

    Swal.close();

    history.push("/crearTema");
    
  }

  return (
    <>

      <div className="card">
        <div className="card-body">
          <h1 className="text-center"><i className="bi bi-list-check"></i> Temas</h1>
        </div>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="second">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="all" className="text-center"><i className="bi bi-chat-right-quote"></i> Todos </Nav.Link>
              </Nav.Item>              
              <Nav.Item>
                <Nav.Link eventKey="first" className="text-center"><i className="bi bi-chat-right-quote"></i> Siguiendo </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="text-center"><i className="bi bi-chat-left-quote"></i> Creados </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <br/>
            <Tab.Content>
              <Tab.Pane eventKey="all">

              <div>Todavia no xDDDDDDDDDDDDDDDD</div>

              </Tab.Pane>              
              <Tab.Pane eventKey="first">

                <div>Todavia no existo</div>

              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {

                /* 
                *************************************
                [INIT] TEMAS PROPIOS DEL USUARIO  
                *************************************
                */

                  !validInfoTema &&

                  objTemas.map(t => (
                    <TemasEntry
                      key={t.id}
                      {...t}
                    />
                  ))

                }

                {validInfoTema &&
                  <div>
                    <br />
                    <div className="alert alert-warning text-center" role="alert">
                      Sin informacion.
					            </div>
                  </div>

                /* 
                *************************************
                [END] TEMAS PROPIOS DEL USUARIO  
                *************************************
                */
                }

              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <div className="d-grid gap-2">
        <button id ="btnCrearTema" className="btn btn-outline-danger" onClick={crearTema} >Crear</button>
        <Link className="btn btn-outline-secondary" to="/" >Volver</Link>
      </div>
    </>

  )
}

import React, { useState } from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TemasEntry } from './TemasEntry'
import { starLoadingTemas, starLoadingTemasById } from '../../actions/temas';
import Swal from 'sweetalert2';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';


export const ListarTemaScreen = () => {

  const dispatch =useDispatch();
  const history = useHistory();
  const { uid }  = useSelector( state => state.auth );

  const crearTema = () =>{
    history.push("/crearTema");

  }

  const allTab = () =>{
    const response = dispatch( starLoadingTemas(null));
    Swal.fire({
      title: '<div class="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
      text: 'Espere un momento.',
      showConfirmButton: false,
      allowOutsideClick: false,
          willOpen : () => {
              Swal.showLoading();
          }
    });
    response.then(r=>{
        Swal.close();
    })
  }

  const firstTab = () =>{
    const response = dispatch( starLoadingTemasById( uid ));
    Swal.fire({
      title: '<div class="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
      text: 'Espere un momento.',
      showConfirmButton: false,
      allowOutsideClick: false,
          willOpen : () => {
              Swal.showLoading();
          }
    });
    response.then(r=>{
        Swal.close();
    })

  }

  const temas = useSelector(state => state.tema);

  let objTemas = {};

  if (temas?.temas) {
    objTemas = Object.values(temas.temas);
  }

  const validInfoTema = Object.entries(objTemas).length === 0;

  const [crumbs] = useState(['Home', 'Lista']);
  const selected = crumb => {
    if(crumb==="Home"){
        history.push("/");
    }

 }

  return (
    <>
      <BreadcrumbScreen crumbs={crumbs} selected={selected} />
      <Tab.Container id="left-tabs-example" >
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="all" size="sm" className="text-center" onClick={allTab}><i className="bi bi-chat-right-quote"></i> Todos </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first" size="sm" className="text-center" onClick={firstTab}><i className="bi bi-chat-right-quote"></i> Creados por ti </Nav.Link>
              </Nav.Item>
              <hr/>
              <div className="d-grid gap-2">
                <button id="btnCrearTema" className="btn btn-danger btn-sm" onClick={crearTema} ><i className="bi bi-plus"></i> Crear</button>
                <Link className="btn btn-outline-secondary btn-sm" to="/" ><i className="bi bi-back"></i> Cerrar</Link>
              </div>
            </Nav>
          </Col>
          <Col sm={9}>

            <Tab.Content>
              <Tab.Pane eventKey="all">
                <br />
                <div className="tableTema">
                  <table className="table table-sm table-striped table-hover border rounded small" style={{ cursor: "pointer" }} >
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">Temas de Discusión</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Comentarios</th>
                        <th scope="col" colSpan="2">Fecha creacion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        !validInfoTema &&
                        objTemas.map(t => (
                          <TemasEntry
                            key={t.id}
                            {...t}
                          />
                        ))
                      }
                      {validInfoTema &&
                        <tr>
                          <td colSpan="5" className="text-center">Sin Información</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                  <br />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <br />
                <div className="tableTema">
                  <table className="table table-sm table-striped table-hover border rounded small" style={{ cursor: "pointer" }} >
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">Temas de Discusión</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Numero de comentario.</th>
                        <th scope="col" colSpan="2">Fecha creacion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        !validInfoTema &&
                        objTemas.map(t => (
                          <TemasEntry
                            key={t.id}
                            {...t}
                          />
                        ))

                      }

                      {validInfoTema &&
                        <tr>
                          <td colSpan="5" className="text-center">Sin Información</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                  <br />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

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
    dispatch( starLoadingTemas(null));

    Swal.fire({
      title: '<div class="spinner-grow text-primary" role="status"> <span class="visually-hidden"></span></div>',  
      footer: 'Loading...',    
      showConfirmButton: false,
      timer: 1000,
      allowOutsideClick: false,
    })

  }

  const firstTab = () =>{
    dispatch( starLoadingTemasById( uid ));

    Swal.fire({
      title: '<div class="spinner-grow text-primary" role="status"> <span class="visually-hidden">Loading...</span></div>',    
      footer: 'Loading...',    
      showConfirmButton: false,
      timer: 1000,
      allowOutsideClick: false,
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
      {/* defaultActiveKey="first" */}
      <Tab.Container id="left-tabs-example" >
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="all" className="text-center" onClick={allTab}><i className="bi bi-chat-right-quote"></i> Todos </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="first" className="text-center" onClick={firstTab}><i className="bi bi-chat-right-quote"></i> Creados por ti </Nav.Link>
              </Nav.Item>
              <br />
              <button id="btnCrearTema" className="btn btn-outline-danger" onClick={crearTema} >Crear</button>
              <br />
              <Link className="btn btn-outline-secondary" to="/" >Volver</Link>
            </Nav>
          </Col>
          <Col sm={9}>
          
            <Tab.Content>
              <Tab.Pane eventKey="all">
                <br/>
              <div className="tableTema">
                <table className="table table-sm table-striped table-hover border rounded small" style={{cursor:"pointer"}} >
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
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="first">
              <br/>
              <div className="tableTema">
                <table className="table table-sm table-striped table-hover border rounded small" style={{cursor:"pointer"}} >
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
                </div>
              </Tab.Pane>
            </Tab.Content>            
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

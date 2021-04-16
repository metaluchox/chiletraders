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
    dispatch( starLoadingTemas());

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

  const [crumbs] = useState(['Home', 'Listar']);
  const selected = crumb => {
    if(crumb==="Home"){
        history.push("/");
    }

 }

  return (
    <>
      <BreadcrumbScreen crumbs={ crumbs } selected={ selected } />

      <div className="card">
        <div className="card-body">
          <h1 className="text-center"><i className="bi bi-list-check"></i> Temas</h1>
        </div>
      </div>
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
              <br/>
              <button id ="btnCrearTema" className="btn btn-outline-danger" onClick={crearTema} >Crear</button>
              <br/>
              <Link className="btn btn-outline-secondary" to="/" >Volver</Link>
            </Nav>
          </Col>
          <Col sm={9}>
            <br/>
            <Tab.Content>
              <Tab.Pane eventKey="all">
                <div className="my-3 p-3 bg-body rounded shadow-sm">

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

                </div>

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

              <Tab.Pane eventKey="first">
                <div className="my-3 p-3 bg-body rounded shadow-sm">

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

                </div>

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
    </>

  )
}

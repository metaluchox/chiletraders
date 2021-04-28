import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CrearComentarioScreen } from '../comentarios/CrearComentarioScreen';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import moment from "moment";

import './temas.css';

export const TemaScreen = () => {
    
    const { active } = useSelector(state => state.tema);
    const { comentarios } = useSelector(state => state.comentario);
    const  auth = useSelector(state => state.auth);
    const history = useHistory();
    const [crumbs] = useState(['Home', 'Listar', 'tema']);

    if(active===null){
        window.location.href = "/listarTema";
    }
  
    if(active===null){
        return <Redirect to="/listarTema" />
    }

    const selected = crumb => {
        if(crumb==="Home"){
            history.push("/");
        }
        if(crumb==="Listar"){
            history.push("/listarTema");
        }     
   }

    function createMarkup(html) {
        let formatDesc = html.replace("<img", "<img style='width:100%'");

        if (formatDesc != null) {
            return { __html: formatDesc };
        } else {
            return { __html: html };
        }
    }

    function formatDate(fecha) {
        const modifyDate = moment(fecha);
        return modifyDate.format("YYYY-MM-DD : kk:mm:ss");
    }

    const deletecomentario = (asd) => {
        console.log(asd);

    }

    return (
        <>

            <BreadcrumbScreen crumbs={ crumbs } selected={ selected } />
            <div className="tableTema">
            <div className="alert alert-dark " role="alert">
                <div className="col-md-12 text-left">
                        <div className="divStyle">
                            <div className="badge bg-dark">{formatDate(active.dateCreation)} </div>
                            <h5 ><strong>{active.titulo}</strong> de {active.nombreUsuario} </h5>
                            <div dangerouslySetInnerHTML={createMarkup(active.descripcion)}></div>
                        </div>
                        <br />
                </div>
            </div>

            <div className="container-fluid">
                <CrearComentarioScreen idTema={active.id} user={auth} cantidadComentario={comentarios.length} />
                <br/>
                <div className="row">                    
                        {
                            comentarios.map(c => (
                                <div key={c.id}>
                                    <div className="alert alert-secondary pointer divStyle">
                                        <div className="badge bg-dark">{formatDate(c.dateCreation)} </div>
                                        <h5><strong>{c.nombreUsuario}</strong> dice... </h5>
                                        <div className="contenedor">
                                            <p dangerouslySetInnerHTML={createMarkup(c.comentario)} />
                                        </div>
                                        
                                        {
                                            (c.idUsuario === auth.uid) &&
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-danger btn-sm" type="button" onClick={deletecomentario}>
                                                    <i className="bi bi-x-circle"></i> Eliminar comentario
                                                </button>
                                            </div>
                                        }
                                        
                                    </div>
                                    <br />
                                    <div />
                                </div>
                            ))
                        }
                </div>
            </div>

            <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary" to="/listarTema" >Volver</Link>
            </div>
            </div>
        </>
    )

}

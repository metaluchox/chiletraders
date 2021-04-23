import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { starLoadingComentariosById } from '../../actions/comentarios';
import { CrearComentarioScreen } from '../comentarios/CrearComentarioScreen';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import moment from "moment";

import './temas.css';

export const TemaScreen = () => {
    
    const { active } = useSelector(state => state.tema);
    const  auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const [crumbs] = useState(['Home', 'Listar', 'tema']);
    const temaDate = moment(active.dateCreation);
    const cantidadComentario = 0;

    if(active===null){
        window.location.href = "/listarTema";
    }

    const listaComentario =  dispatch( starLoadingComentariosById( active.id ));

    listaComentario.then(function(result) {
        let divComentario = document.getElementById('divComentario');
        divComentario.innerHTML="";

        if(result.length > cantidadComentario){
             for (var i=0; i<result.length; i++)
             {
                let comentarioDate = moment(result[i].dateCreation);
                let comentario = result[i].comentario.replace("<img", "<img style='width:100%'");
                
                divComentario.innerHTML+= '<div class="col-md-12">';
                    divComentario.innerHTML+= '<div class="badge bg-secondary">'+comentarioDate.format("YYYY-MM-DD : kk:mm:ss")+'</div>';
                    divComentario.innerHTML+= '<h3>'+result[i].nombreUsuario+' dice... </h3> ';
                    divComentario.innerHTML+= comentario;
                divComentario.innerHTML+='</div>';
                divComentario.innerHTML+='<hr/>';
             }  
        }else{
            divComentario.innerHTML+= '<br/><div class="alert alert-warning text-center" role="alert">No information</div><br/>';
        }
         
    });
  
    if(active===null){
        return <Redirect to="/listarTema" />
    }

    setTimeout(() => {
        let formatDesc = active.descripcion.replace("<img", "<img style='width:100%'"); 
        document.getElementById("demo").innerHTML = formatDesc;

    }, 1000);


  

    const selected = crumb => {
        if(crumb==="Home"){
            history.push("/");
        }
        if(crumb==="Listar"){
            history.push("/listarTema");
        }     
   }

 

    return (
        <>

            <BreadcrumbScreen crumbs={ crumbs } selected={ selected } />

            <div className="alert alert-dark " role="alert">
                <div className="col-md-12 text-left">
                        <div>
                            <div className="badge bg-dark">{temaDate.format("YYYY-MM-DD : kk:mm:ss")}</div>
                            <h5><strong>{active.titulo}</strong> de {auth.name} </h5>
                        </div>
                        <br />
                        <div id="demo"></div>
                </div>
            </div>

            <div className="container-fluid">
                <CrearComentarioScreen idTema={active.id} user={auth} />
                <br/>
                <div className="row">
                    <h4 className="text-center alert alert-secondary">Comentarios</h4>
                    <div id="divComentario" className="alert alert-secondary pointer"></div>
                </div>
                <br />
            </div>

            <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary" to="/listarTema" >Volver</Link>
            </div>
            

            

        </>
    )

}

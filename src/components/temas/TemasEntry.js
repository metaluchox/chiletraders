import React, { useState } from 'react'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { activeTema, startDeleteTema, startUpdateTema, startUpdateStatusTema } from '../../actions/temas';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { starLoadingComentariosById } from '../../actions/comentarios';
import { Button, Modal } from 'react-bootstrap';
import { starLoadingUsuarioById } from '../../actions/user';

export const TemasEntry = ({ id, idUsuario, coutComentario, nombreUsuario, titulo, dateCreation, descripcion, status, url }) => {

    const temaDate = moment(dateCreation);
    const dispatch = useDispatch();
    const history = useHistory();
    const auth  = useSelector( state => state.auth ); 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [temaActivo, setTemaActivo] = useState(status);

	const [datos, setDatos] = useState({
		descripcion : descripcion,
	})


    const handleVerTema = () => {
        dispatch(
            activeTema(id, {
                titulo,
                nombreUsuario,
                dateCreation,
                descripcion,
                status,
                url
            })
        );

        dispatch( starLoadingComentariosById( id ));

        history.push("/tema");
    }

    const handleEliminarTema = () => {
        Swal.fire({
            title: 'Are you sure delete '+titulo+'?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeleteTema(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })
    }
    
    const handleEditarTema = () => {
        document.getElementById("textAreaDesc").style.display = "block";
        document.getElementById("divVerTema").style.display = "none";
        document.getElementById("divEditarTema").style.display = "none";
        document.getElementById("divEstadoTema").style.display = "none";
        document.getElementById("divEliminarTema").style.display = "none";
        document.getElementById("divVerUsuario").style.display = "none";
    }

    const handleVolver = (e) => {
        e.preventDefault();

        if(datos.descripcion !== descripcion){
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
            }).then((result) => {
                if (result.isConfirmed) {

                    dispatch(startUpdateTema(datos, id));

                    Swal.fire({
                    	icon: 'success',
                    	title: 'Updated',
                    })
    
                    document.getElementById("textAreaDesc").style.display = "none";
                    document.getElementById("divVerTema").style.display = "block";
                    document.getElementById("divEditarTema").style.display = "block";
                    document.getElementById("divEstadoTema").style.display = "block";
                    document.getElementById("divEliminarTema").style.display = "block";
                    document.getElementById("divVerUsuario").style.display = "block";                
    
                }
            })
        }else{

            document.getElementById("textAreaDesc").style.display = "none";
            document.getElementById("divVerTema").style.display = "block";
            document.getElementById("divEditarTema").style.display = "block";
            document.getElementById("divEstadoTema").style.display = "block";
            document.getElementById("divEliminarTema").style.display = "block";
            document.getElementById("divVerUsuario").style.display = "block";     
        }    
    }


    const handleEstadoTema = (e) => {

        if (temaActivo) {

            dispatch(startUpdateStatusTema(false, id));
            setTemaActivo(false);

            Swal.fire({
                icon: 'warning',
                title: 'Desactivado',
            })

        } else {

            dispatch(startUpdateStatusTema(true, id));
            setTemaActivo(true);

            Swal.fire({
                icon: 'success',
                title: 'Activado',
            })
        }

    }

    const handleVerUsuario = () => {
        const usuarioSelect = dispatch(starLoadingUsuarioById(idUsuario));
        Swal.fire({
            title: '<div className="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
            text: 'Espere un momento.',
            showConfirmButton: false,
            allowOutsideClick: false,
                willOpen : () => {
                    Swal.showLoading();
                }
          });
        usuarioSelect.then(r => {
            Swal.close();
            history.push("/miPerfil");
        })        

    }    
    
    const handleChangeTextArea = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    
    const handleMensajeTema = () =>{
        Swal.fire(
            'Tema Deshabilitado',
            'El administrador ha deshabilitado el tema <i className="bi bi-emoji-neutral"></i>',
            'warning',
          )
    }

    return (
        <>
            <tr id={id}>

                
                <th scope="row">
                    {
                        (auth.admin) && <i className="bi bi-gear" onClick={handleShow}></i>
                    }
                </th>
                <td style={(temaActivo===true)?{}:{color:"red"}} onClick={(temaActivo===true)? handleVerTema: handleMensajeTema}>{titulo}</td>
                <td style={(temaActivo===true)?{}:{color:"red"}} onClick={(temaActivo===true)? handleVerTema: handleMensajeTema}>{nombreUsuario}</td>
                <td style={(temaActivo===true)?{}:{color:"red"}} onClick={(temaActivo===true)? handleVerTema: handleMensajeTema}>{coutComentario}</td>
                <td style={(temaActivo===true)?{}:{color:"red"}} onClick={(temaActivo===true)? handleVerTema: handleMensajeTema}>{temaDate.locale("es-us").format("LLL")}</td>
                <td>
                    {
                        (idUsuario ===auth.uid) &&
                        <i className="bi bi-trash" onClick={handleEliminarTema} title="Eliminar Tema"></i>
                    }                   
                </td>
            </tr>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title ><i className="bi bi-binoculars text-center"> {titulo} </i></Modal.Title> 
                </Modal.Header>
                <Modal.Body className="pointer">
                    <div id="divVerTema" className="alert alert-primary text-center" role="alert" onClick={handleVerTema}>
                        <i className="bi bi-mic-fill"></i> Ver tema                     
                    </div>
                    <div id="divVerUsuario" className="alert alert-primary  text-center" role="alert" onClick={handleVerUsuario}>
                        <i className="bi bi-person-circle"></i> Ver usuario  <small>( {nombreUsuario})</small>. 
                    </div>                    
                    <hr/>
                    {
                        (temaActivo) &&
                        <div id="divEstadoTema" className="alert alert-warning text-center" role="alert" onClick={handleEstadoTema}>
                            <i className="bi bi-bookmark-dash"></i> Desactivar Tema
                        </div>
                    }

                    {
                        (!temaActivo) &&
                        <div id="divEstadoTema" className="alert alert-success text-center" role="alert" onClick={handleEstadoTema}>
                            <i className="bi bi-bookmark-plus"></i> Activar Tema
                        </div>
                    }

                    <div id="divEditarTema" className="alert alert-warning text-center" role="alert" onClick={handleEditarTema}>
                        <i className="bi bi-pencil-square"></i> Editar Tema.                        
                    </div>
                    <div id ="textAreaDesc"style={{display:"none"}}>
                        <div className="alert alert-warning text-center" role="alert">
                            <i className="bi bi-pencil-square"></i> Editar Tema.                        
                        </div>                        
                        <textarea className="form-control"
                                    id="descripcion" 
                                    name="descripcion"
                                    rows="10"                                   
                                    onChange={handleChangeTextArea} value={datos.descripcion} />
                        <br/>
                        <div className="d-grid gap-2">
                            <button className="btn btn-outline-secondary btn-sm" type="button" onClick={handleVolver}>
                                <i className="bi bi-backspace"></i> Guardar y volver
                            </button>
                        </div>
                    </div>
                    <div id="divEliminarTema" className="alert alert-danger text-center" role="alert"  onClick={handleEliminarTema}>
                        <i className="bi bi-x-circle"></i> Eliminar Tema.                         
                    </div>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} block>
                        <i className="bi bi-back"></i> Cerrar Ventana
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

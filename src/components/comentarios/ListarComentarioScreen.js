import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteComentario } from '../../actions/comentarios';
import { startUpdateCountComentario } from '../../actions/temas';

export const ListarComentarioScreen = ({id, idUsuario, dateCreation, nombreUsuario, comentario, idTema, user, cantidadComentario}) => {

    const dispatch =useDispatch();

    function formatDate(fecha) {
        const modifyDate = moment(fecha);
        return modifyDate.format("YYYY-MM-DD : kk:mm:ss");
    }

    function createMarkup(html) {
        let formatDesc = html.replace("<img", "<img style='width:100%'");

        if (formatDesc != null) {
            return { __html: formatDesc };
        } else {
            return { __html: html };
        }
    }  

    const deletecomentario = () => {
        Swal.fire({
            title: 'Do you want to delete the changes?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Delete`,
            denyButtonText: `Don't Delete`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(startDeleteComentario (idTema, id ));
                dispatch(startUpdateCountComentario(idTema, (cantidadComentario-1)));
              Swal.fire('Delete comentario!', '', 'success')
            } 
          })


    }

    return (
        <>
                                <div>
                                    <div className="alert alert-secondary pointer divStyle">
                                        <div className="badge bg-dark">{formatDate(dateCreation)} </div>
                                        <h5><strong> {nombreUsuario} </strong> dice... </h5>
                                        <div className="contenedor">
                                            <p dangerouslySetInnerHTML={createMarkup(comentario)} />
                                        </div>
                                        {
                                            (idUsuario === user.uid || user.admin===true) &&
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

        </>
    )
}

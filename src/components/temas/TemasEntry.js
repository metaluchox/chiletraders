import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeTema } from '../../actions/temas';
import { useHistory } from 'react-router';

export const TemasEntry = ({ id, idUsuario, nombreUsuario, titulo, dateCreation, descripcion, status, url }) => {

    const temaDate = moment(dateCreation);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleEntryClick = () => {
        dispatch(
            activeTema(id, {
                titulo,
                dateCreation,
                descripcion,
                status,
                url
            })
        );

        history.push("/tema");
    }


    return (
        <>
            <tr onClick={handleEntryClick}>
                <th scope="row"><i className="bi bi-star-fill"></i></th>
                <td>{titulo}</td>
                <td>{nombreUsuario}</td>
                <td><p className="badge bg-secondary text-wrap">{temaDate.locale("es-us").format("LLL")} </p></td>
            </tr>
        </>
    )
}

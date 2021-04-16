import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeTema } from '../../actions/temas';
import { useHistory } from 'react-router';

export const TemasEntry = ({ id, titulo, date, descripcion, status, url }) => {

    const temaDate = moment(date);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleEntryClick = () => {
        dispatch(
            activeTema(id, {
                titulo,
                date,
                descripcion,
                status,
                url
            })
        );

        history.push("/tema");
    }



    return (
        <>
            <div className="d-flex text-muted pt-3" onClick={handleEntryClick}>
                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" 
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                </svg>

                <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">{titulo}</strong>
                    {descripcion.substring(1, 50)}
                    {temaDate.format("YYYY-MM-DD : kk:mm:ss")}
                </p>
            </div>

        </>
    )
}

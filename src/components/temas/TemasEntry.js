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
            <div className="alert alert-secondary" role="alert" onClick={handleEntryClick}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1"><img src="../assets/image/avatar7.png " style={{width:50}} className="img-thumbnail" alt="..." /></div>
                        <div className="col-sm-11">
                            <strong>{titulo}</strong> {descripcion.substring(1, 50)} <strong>de usuario</strong> ({temaDate.format("YYYY-MM-DD : kk:mm:ss")})
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

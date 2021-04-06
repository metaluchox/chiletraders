import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeTema } from '../../actions/temas';
import { useHistory } from 'react-router';


export const TemasEntry = ({id, titulo, date, descripcion, status, url }) => {

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
            <table className="table table-filter" onClick={handleEntryClick}>
                <tbody>
                    <tr data-status="pagado">
                        <td>
                            <div className="media">
                                <a href="/" className="pull-left">
                                    <img src={`../assets/image/${url}.png`} className="media-photo" alt={url} />
                                </a>
                                <div className="media-body">
                                    <span className="media-meta pull-right">
                                        { temaDate.format("YYYY-MM-DD : kk:mm:ss") }      
                                    </span>
                                    <h4 className="title">
                                        {titulo}
                                        <span className="pull-right pagado">({status})</span>
                                    </h4>
                                    <p className="summary"> {descripcion} </p>
                                </div>
                            </div>
                        </td>
                    </tr>			
                </tbody>
            </table>
        </>
    )
}

// react-chiletraders

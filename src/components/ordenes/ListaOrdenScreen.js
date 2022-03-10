import React from 'react'
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';


export const ListaOrdenScreen = () => {
    const history = useHistory();
    // const {isLogged}  = useSelector( state => state.auth );    

    const verOrden = () =>{
        history.push("/verOrden");
    }

    return (
        <>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
                <table className='table table table-hover table-sm'>
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
                <th scope="col">PDF</th>
                </tr>
                </thead>
                <tbody>
                <tr className='cursorPointer' >
                <th onClick={verOrden} > 15784 </th>
                <td>Mark</td>
                <td>Otto</td>
                <td><a href='./verPdf' target='_blank'>PDF</a>
                        <i className="bi bi-file-earmark-pdf-fill">Crea </i>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
                </tbody>
                </table>
        </div>
    </>
    )
}

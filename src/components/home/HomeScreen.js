import React from 'react'
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { useHistory } from 'react-router';

import './HomeScreen.css'

export const HomeScreen = () => {
	const dispatch =useDispatch();
    const history = useHistory();
    const {isLogged}  = useSelector( state => state.auth );    

    dispatch( starLoadingTemas(20));

    const addOrden = () =>{
        history.push("/addOrden");
    }

    return (
        <>
        <div className='container'>
        <div class="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={addOrden} ><i className="bi bi-plus-circle"> Crear Orden</i></button>
        </div>
        <hr />
        <div className="my-3 p-3 bg-body rounded shadow-sm">
                <table className='table table table-hover table-sm'>
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
                </tbody>
                </table>
            </div>
            <hr />

                <ContentRigth isLogged={isLogged} />
        </div>
    </>
    )
}

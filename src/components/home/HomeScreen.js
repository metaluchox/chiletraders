import React from 'react'
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { useHistory } from 'react-router';
import { ListaOrdenScreen } from '../ordenes/ListaOrdenScreen';

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
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={addOrden} ><i className="bi bi-plus-circle"> Crear Orden</i></button>
        </div>
        <hr />
            <ListaOrdenScreen  />
        <hr />
            <ContentRigth isLogged={isLogged} />
        </div>
    </>
    )
}

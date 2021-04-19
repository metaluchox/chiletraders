import React, { useState } from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ShortCutScreen } from './ShortCutScreen';
import { starLoadingTemas } from '../../actions/temas';
import { starLoadingMonedas } from '../../actions/monedas';


export const HomeScreen = () => {
	const dispatch =useDispatch();

    const {isLogged}  = useSelector( state => state.auth );    
    const history = useHistory();
    
    const monedaSelect = ["uf","dolar","euro","utm","bitcoin"];

    dispatch( starLoadingTemas());
    dispatch( starLoadingMonedas(monedaSelect))

    return (
        <>

        <ShortCutScreen isLogged={ isLogged } />

        <div className="row mb-3">
        <div className="col-sm-3 themed-grid-col">
            <ContentLeft isLogged={ isLogged } />
        </div>

        <div className="col-sm-6 themed-grid-col">
            <ContentCenter />
        </div>

        <div className="col-sm-3 themed-grid-col">
            
            <ContentRigth isLogged={ isLogged } />

        </div>
    </div>
    </>
    )
}

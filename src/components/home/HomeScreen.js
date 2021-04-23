import React from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { starLoadingMonedas } from '../../actions/monedas';
import { ShortCutScreen } from './ShortCutScreen';


export const HomeScreen = () => {
	const dispatch =useDispatch();

    const {isLogged}  = useSelector( state => state.auth );    
    
    const monedaSelect = ["uf","ivp","dolar","euro","utm","bitcoin", "dolar_intercambio","imacec","tpm", "libra_cobre", "tasa_desempleo"];

    dispatch( starLoadingTemas(5));
    dispatch( starLoadingMonedas(monedaSelect))

    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-3 themed-grid-col">
                    <ContentLeft isLogged={isLogged} />
                </div>

                <div className="col-sm-6 themed-grid-col">
                    <ContentCenter />
                </div>

                <div className="col-sm-3 themed-grid-col">

                    <ContentRigth isLogged={isLogged} />

                </div>
            </div>
            <div className="row mb-3 text-center">
               <ShortCutScreen />
            </div>
    </>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import { starLoadingMonedas } from '../../actions/monedas';
import { starLoadingTemas } from '../../actions/temas';
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { Footer } from '../ui/Footer';
import { NavBarPublic } from "../ui/NavBarPublic";
export const LoginScreen = () => {
	const dispatch =useDispatch();

    const monedaSelect = ["uf","ivp","dolar","euro","utm","bitcoin", "dolar_intercambio","imacec","tpm", "libra_cobre", "tasa_desempleo"];

    dispatch( starLoadingTemas(5));
    dispatch( starLoadingMonedas(monedaSelect))

    return (
        <>
            <NavBarPublic />
            <br />
            <div className="row mb-3">
                <div className="col-sm-3 themed-grid-col">
                    <ContentLeft />
                </div>

                <div className="col-sm-6 themed-grid-col">
                    <ContentCenter />
                </div>

                <div className="col-sm-3 themed-grid-col">

                    <ContentRigth />

                </div>
            </div>
            <br />
            <Footer />

        </>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { starLoadingMonedas } from '../../actions/monedas';
import { MonedaScreen } from '../monedas/MonedaScreen';

export const ContentLeft = ( request ) => {
	const history = useHistory();
  const dispatch =useDispatch();

  const monedas = useSelector(state => state.moneda.monedas);
  const validoContenido = monedas.length === 0;

  const monedaSelect = ["uf","ivp","dolar","euro","utm","bitcoin", "dolar_intercambio","ipc","imacec","tpm", "libra_cobre", "tasa_desempleo"];

  const handleDetailMoneda = () => {

    console.log("handleDetailMoneda");

    dispatch( starLoadingMonedas(monedaSelect));
    history.push("/monedaDetalle");
  }


    return (
        <>      

            {
              !validoContenido &&
              monedas.map(t => (
                <MonedaScreen
                  key={t.codigo}
                  {...t}
                />
              ))
            }
             <div className="alert alert-primary text-center border border-primary" role="alert" onClick={handleDetailMoneda}>
             <i className="bi bi-zoom-in"></i> Ver mas
            </div>     

        </>
    )
}

import { loadUserById } from "../helpers/loadUser";
import { loadValorMonedas } from "../helpers/loadValorMonedas";
import { types } from "../types/types";


export const starLoadingMonedas = (monedaSelect) =>{
    return async ( dispatch ) => {
        const monedas = await loadValorMonedas(monedaSelect); 
        dispatch( setMonedas ( monedas ) );
    }
}

export const setMonedas = ( monedas ) => ({
    type : types.monedasLoad,
    payload: monedas
})

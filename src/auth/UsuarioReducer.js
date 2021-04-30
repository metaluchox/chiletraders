import { types } from "../types/types";

const initialState = {
    usuario: [],
    active: null
}

export const UsuarioReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.usuarioLoadById:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
                      
        default:
            return state;
    }
}
import { types } from "../types/types";


const initialState = {
    comentarios: [],
    active: null
}

export const ComentarioReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case types.comentarioLoad:
            return {
                ...state,
                comentarios: [
                    ...action.payload 
                ]
            }  
        case types.comentarioDelete:
            return {
                ...state,
                active:null,
                comentarios: state.comentarios.filter( comentario => comentario.id !== action.payload)
            }             
                      
        default:
            return state;
    }
}
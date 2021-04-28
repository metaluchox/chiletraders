import { types } from "../types/types";


const initialState = {
    temas: [],
    active: null
}

export const temasReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case types.temaActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.temaLoad:
            return {
                ...state,
                temas: [
                    ...action.payload 
                ]
            }  
        case types.temaDelete:
            return {
                ...state,
                active:null,
                temas: state.temas.filter( tema => tema.id !== action.payload)
            }  
        case types.temaLogoutCleaining:
            return {
                ...state,
                active:null,
                temas: []
            }             
            

        default:
            return state;
    }
}
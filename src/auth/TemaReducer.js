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
                      
        default:
            return state;
    }
}
import { types } from "../types/types";

const initialState = {
    monedas: [],
    active: null
}

export const monedasReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case types.monedasLoad:
            return {
                ...state,
                monedas: [
                    ...action.payload 
                ]
            }  
                      
        default:
            return state;
    }
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../auth/authReducer';
import { ComentarioReducer } from '../auth/ComentarioReducer';
import { temasReducer } from '../auth/TemaReducer';
import { uiReducer } from '../auth/uiReducer';
import { UsuarioReducer } from '../auth/UsuarioReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    tema: temasReducer,
    comentario: ComentarioReducer,
    usuario: UsuarioReducer,    
})


export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk)
    )
);
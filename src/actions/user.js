import { loadUserById, loadUsers } from "../helpers/loadUser";
import { types } from "../types/types";

export const starLoadingUsuarioById = (uid) =>{
    return async ( dispatch ) => {
        const usuario = await loadUserById( uid ); 
        dispatch( activeUsuario(uid, usuario) );
    }
}

export const starLoadingUsuario = () =>{
    return async ( dispatch ) => {
        const usuario = await loadUsers(); 

        console.log(usuario);
    }
}

export const activeUsuario = ( id, usuario ) => ({
    type : types.usuarioLoadById,
    payload: {
        id,
        ...usuario
    }
})
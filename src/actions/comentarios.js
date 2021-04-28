import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadComentariosById } from '../helpers/loadComentarios'


export const startAddComentario = (idTema, comentario, usuario) => {
    return async(  dispatch, getState ) => {

        const newComentario = {
            comentario: comentario, 
            nombreUsuario : usuario.name, 
            idUsuario: usuario.uid,
            dateCreation: new Date().getTime(),
        }

        await db.collection(`tema/${idTema}/comentario`).add(newComentario);

        starLoadingComentariosById(idTema);

    }
}

export const starLoadingComentariosById = (uid) =>{
    return async ( dispatch ) => {
        const comentarios = await loadComentariosById( uid ); 
        dispatch( setComentarios ( comentarios ) );
    }
}

export const setComentarios = ( comentarios ) => ({
    type : types.comentarioLoad,
    payload: comentarios
})

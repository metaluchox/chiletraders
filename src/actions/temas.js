import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadTemas } from '../helpers/loadTemas'
import { fileUpload } from "../helpers/fileUpload";
import Swal from 'sweetalert2';


export const startNewTema = (uid, titulo, descripcion, status, url) => {
    return async(  dispatch, getState ) => {

        const { uid } = getState().auth;

        const newTema = {
            idUsuario: uid,
            titulo: titulo,
            descripcion: descripcion,
            url:url,
            status: status,
            dateCreation: new Date().getTime(),
            dateModify: new Date().getTime(),
        }

        const docRef = await db.collection(`${uid}/chiletraders/tema`).add(newTema);

        dispatch(activeTema(docRef.id, newTema));

    }
}

export const activeTema = ( id, temas ) => ({
    type : types.temaActive,
    payload: {
        id,
        ...temas
    }
})

export const starLoadingTemas = (uid) =>{
    return async ( dispatch ) => {
        const temas = await loadTemas( uid ); 
        dispatch( setTemas ( temas ) );
    }
}

export const setTemas = ( temas ) => ({
    type : types.temaLoad,
    payload: temas
})


export const startUploading = ( file ) => {
    return async ( dispatch , getState ) => {

        Swal.fire({

            title: 'Cargando...',
            text: 'Espere un momento.',
            showConfirmButton: false,
            allowOutsideClick: false,
                willOpen : () => {
                    Swal.showLoading();
                }
          });
        
        const fileUrl =  await fileUpload(file);
        
        Swal.close();

        return fileUrl;

    }
}
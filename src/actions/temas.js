import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadTemas, loadTemasById } from '../helpers/loadTemas'
import { fileUpload } from "../helpers/fileUpload";
import Swal from 'sweetalert2';


export const startNewTema = (auth, titulo, descripcion, status, url) => {
    return async(  dispatch, getState ) => {

        const newTema = {
            idUsuario: auth.uid,
            nombreUsuario: auth.name,
            titulo: titulo,
            descripcion: descripcion,
            url:url,
            status: status,
            like:0,
            comentario:[],
            dateCreation: new Date().getTime(),
            dateModify: new Date().getTime(),
        }

        const docRef = await db.collection(`tema`).add(newTema);

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

export const starLoadingTemasById = (uid) =>{
    return async ( dispatch ) => {
        const temas = await loadTemasById( uid ); 
        dispatch( setTemas ( temas ) );
    }
}
export const starLoadingTemas = (limit) =>{
    return async ( dispatch ) => {
        const temas = await loadTemas(limit); 
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
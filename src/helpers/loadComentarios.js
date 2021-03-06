import { db } from "../firebase/firebase-config"

export const loadComentariosById = async (uid) => {

    const comentarioSnap = await db.collection(`tema/${uid}/comentario`).limit(15).orderBy('dateCreation', 'desc').get();
    const comentarios = []

    comentarioSnap.forEach(snapHijo => {
        if (snapHijo.exists) {

            comentarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })

        }
    })
    
    return comentarios;
    
}

export const loadCoutComentariosById = async (uid) => {
    const comentarioSnap = await db.collection(`tema/${uid}/comentario`).get();
    return comentarioSnap.size;
}
import { db } from "../firebase/firebase-config"

export const loadComentariosById = async (uid) => {

    const comentarioSnap = await db.collection(`tema/${uid}/comentario`).get();
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
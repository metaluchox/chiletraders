import { db } from "../firebase/firebase-config"

export const loadTemasById = async (uid) => {

    const temaSnap = await db.collection(`tema`).where('idUsuario', '==', uid).get();
    const temas = []

    temaSnap.forEach(snapHijo => {
        if (snapHijo.exists) {

            temas.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })

        }
    })

    return temas;

}

export const loadTemas = async (limit) => {

    if(limit === null) limit = 25;
    
    const temaSnap = await db.collection(`tema`).orderBy('dateCreation', 'desc').limit(limit).get();
    const temas = []

    temaSnap.forEach(snapHijo => {
        if (snapHijo.exists) {

            temas.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })

        }
    })

    return temas;


}
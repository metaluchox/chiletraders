import { db } from "../firebase/firebase-config"

export const loadTemas = async (uid) => {
    
    const temaSnap = await db.collection(`${uid}/chiletraders/tema`).get();
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
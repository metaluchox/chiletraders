import { db } from "../firebase/firebase-config";


export const loadUser = async ( uid ) => {

    console.log(uid);

    const userSnap = await db.collection('usuarios').where('uid', '==', uid).get();

    const user = [];

    userSnap.forEach(snapHijo =>{
            user.push({
                //id: snapHijo.uid,
                ...snapHijo.data()
            })

    })
    return user;

}
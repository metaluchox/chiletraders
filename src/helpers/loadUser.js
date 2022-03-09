import { db } from "../firebase/firebase-config";


export const loadUser = async ( request ) => {
    const user = [];
    try {
        const userSnap = await db.collection(`gafa/usuario/${request.id}`).get();    

        userSnap.forEach(snapDoc =>{
            if (snapDoc.exists) {

                user.push({
                    id: request.id,
                    ...snapDoc.data()
                })

            }else{
                console.log("Doc usuario no exist")
            }
               
        })
        
    } catch (error) {
        console.error(error)
    }

    return user;

}

export const loadUserById = async ( uid ) => {  
    let user = "";
    try {
        const userSnap = await db.collection(`gafa/usuario/${uid}`).get();    
        userSnap.forEach(doc => {
            user = doc.data();
          });       
        
    } catch (error) {
        console.error(error)
    }

    return user;

}

export const updateUser = async ( data, uid ) => {  
    try {

        let idDoc = "";
        const userRef = db.collection(`gafa/usuario/${uid}`);
        const doc = await  userRef.get();
        let response = "";

        doc.forEach(
            doc => { 
                idDoc = doc.id; 
            }
        );
 
        userRef.doc(idDoc)
                .update({
                    about: data.about,
                    fono: data.fono,
                    nombre: data.fullName,
                    admin: (data.admin==="true") ? true : false,
                })
                .then(r => {
                    response = "Actualizado";
                })
                .catch( e => {
                    console.log("Error "+e);
                    response = "Error "+e;
                })
          
                return response;
        
    } catch (error) {
        console.error(error)
    }

    

}
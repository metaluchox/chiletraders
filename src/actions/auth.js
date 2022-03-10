import { types } from "../types/types";
import { firebase, googleAuthProvide, db } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
        let isAdmin = false;

        return (dispatch) => {

                dispatch(startLoading());

                firebase.auth().signInWithEmailAndPassword(email, password)
                        .then( async ({ user }) => {

                                Swal.fire({
                                        title: '<div className="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
                                        text: 'Espere un momento.',
                                        showConfirmButton: false,
                                        allowOutsideClick: false,
                                            willOpen : () => {
                                                Swal.showLoading();
                                            }
                                      });       

                        // Create a reference to the cities collection
                        const userRef = db.collection(`gafa/usuario/${user.uid}`);
                        // Create a query against the collection
                        const queryRef = await userRef.where('email', '==', user.email).get();

                        if (!queryRef.empty) {
                                queryRef.forEach(doc => {
                                        isAdmin = (doc.data().admin === undefined) ? false : doc.data().admin;
                                });  
                        }
                                dispatch(login(user.uid, user.displayName, isAdmin))
                                dispatch(finishLoading());

                                      const Toast = Swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                          toast.addEventListener('mouseenter', Swal.stopTimer)
                                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                      })
                                      
                                      Swal.close();

                                      Toast.fire({
                                        icon: 'success',
                                        title: 'Signed in successfully '+user.displayName
                                      })
        

                        })
                        .catch(e => {
                                console.log(e)
                                dispatch(finishLoading());
                                Swal.fire('Error', e.message, 'error');
                        })
        }
}

export const startGoogleLogin = () => {
        let isAdmin = false;
        return (dispatch) => {

                firebase.auth().signInWithPopup(googleAuthProvide)
                        .then( async ({ user }) => {
                                
                                Swal.fire({
                                        title: '<div className="text-center" role="status"> <img className="mb-2 bg-primary " src="../../assets/image/Comp_14.gif" alt="" width="50%"  /></div>',
                                        text: 'Espere un momento.',
                                        showConfirmButton: false,
                                        allowOutsideClick: false,
                                            willOpen : () => {
                                                Swal.showLoading();
                                            }
                                      });

                                // Create a reference to the cities collection
                                const userRef = db.collection(`gafa/usuario/${user.uid}`);
                                // Create a query against the collection
                                const queryRef = await userRef.where('email', '==', user.email).get();

                                if (queryRef.empty) {
                                  
                                        const usuario = {
                                        
                                                uid : user.uid ,
                                                nombre: user.displayName,
                                                email: user.email, 
                                                photoUrl: user.photoURL,
                                                fono: '',
                                                about: '',
                                                admin: false,
                                                dateIni: new Date().getTime(),
                                                dateModify: new Date().getTime(),
                                                                                
                                        }
                                        db.collection(`gafa/usuario/${user.uid}`).add(usuario);                                        
       

                                }else{
                                        queryRef.forEach(doc => {
                                                isAdmin = (doc.data().admin === undefined) ? false : doc.data().admin;
                                        });  
                                }         
                
                                dispatch( login (user.uid, user.displayName, isAdmin) )

                                Swal.close();

                                const Toast = Swal.mixin({
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                          toast.addEventListener('mouseenter', Swal.stopTimer)
                                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                      })
                                      
                                      Toast.fire({
                                        icon: 'success',
                                        title: 'Signed in successfully '+user.displayName
                                      })
                                                                      
                        })

        }
}

export const startRegisterEmailPassword = (email, password, name) => {
        return (dispatch) => {

                firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(async ({ user }) => {

                                await user.updateProfile({
                                        displayName: name
                                })


                                // Create a reference to the cities collection
                                const userRef = db.collection(`gafa/usuario/${user.uid}`);
                                // Create a query against the collection

                                const queryRef = await userRef.where('email', '==', user.email).get();
                                if (queryRef.empty) {
                                
                                        const usuario = {
                                        
                                                uid : user.uid ,
                                                nombre: user.displayName,
                                                email: user.email, 
                                                photoUrl: user.photoURL,
                                                fono: '',
                                                about: '',
                                                admin: false,
                                                dateIni: new Date().getTime(),
                                                dateModify: new Date().getTime(),
                                                                                
                                        }

                                        db.collection(`gafa/usuario/${user.uid}`).add(usuario);                                        


                                }

                                Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Bienvenido '+user.displayName,
                                        showConfirmButton: false,
                                        timer: 2000
                                      })
                                dispatch(
                                        login(user.uid, user.displayName, user.admin)
                                )
                        })
                        .catch(e => {
                                console.log(e);
                                Swal.fire('Error', e.message, 'error');
                        })

        }
}

export const startRecuperarPass = (email) => {
        return (dispatch) => {
                firebase.auth().sendPasswordResetEmail(email)
                        .then(function() {
                                Swal.fire(`
                                        <div className="alert alert-primary" role="alert">
                                                        <i className="bi bi-check2"></i> 
                                                        Se ha enviado un correo electrónico a su cuenta ${email}, siga los pasos indicados.
                                        </div>
                                `)                                
                        })
                        .catch(function(error) {
                                Swal.fire(`
                                        <div className="alert alert-danger" role="alert">
                                                <i className="bi bi-exclamation-octagon-fill"></i> Error : ${error}
                                        </div>
                                `)                                  
                                console.log(error);
                        });

        }
}

export const login = (uid, displayName,admin) => ({
        type: types.login,
        payload: {
                uid,
                displayName,
                admin
        }

})

export const startLogout = () => {

        return (dispatch) => {
                firebase.auth().signOut();
                dispatch(logout());

                const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Sign out '
                      })

        }

}

export const logout = () => ({
        type: types.logout
})


import { types } from "../types/types";
import { firebase, googleAuthProvide, db } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
        return (dispatch) => {

                dispatch(startLoading());

                firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(({ user }) => {
                                dispatch(login(user.uid, user.displayName))
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
        return (dispatch) => {

                firebase.auth().signInWithPopup(googleAuthProvide)
                        .then( async ({ user }) => {
                                 
                                // Create a reference to the cities collection
                                const userRef = db.collection(`${user.uid}/chiletraders/usuario`);
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
                                                dateIni: new Date().getTime(),
                                                dateModify: new Date().getTime(),
                                                                                
                                        }

                                        db.collection(`${user.uid}/chiletraders/usuario`).add(usuario);                                        


                                }                                  

                                dispatch(
                                        login(user.uid, user.displayName)
                                )

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
                                const userRef = db.collection(`${user.uid}/chiletraders/usuario`);
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
                                                dateIni: new Date().getTime(),
                                                dateModify: new Date().getTime(),
                                                                                
                                        }

                                        db.collection(`${user.uid}/chiletraders/usuario`).add(usuario);                                        


                                }

                                Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Bienvenido '+user.displayName,
                                        showConfirmButton: false,
                                        timer: 2000
                                      })

                                dispatch(
                                        login(user.uid, user.displayName)
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
                                        <div class="alert alert-primary" role="alert">
                                                        <i class="bi bi-check2"></i> 
                                                        Se ha enviado un correo electrónico a su cuenta ${email}, siga los pasos indicados.
                                        </div>
                                `)                                
                        })
                        .catch(function(error) {
                                Swal.fire(`
                                        <div class="alert alert-danger" role="alert">
                                                <i class="bi bi-exclamation-octagon-fill"></i> Error : ${error}
                                        </div>
                                `)                                  
                                console.log(error);
                        });

        }
}

export const login = (uid, displayName) => ({

        type: types.login,
        payload: {
                uid,
                displayName
        }

})

export const startLogout = () => {

        return (dispatch) => {
                firebase.auth().signOut();


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


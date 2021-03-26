import { types } from "../types/types";
import { firebase, googleAuthProvide } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
        return (dispatch) => {

                dispatch(startLoading());

                firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(({ user }) => {
                                dispatch(login(user.uid, user.displayName))
                                dispatch(finishLoading());


                                Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Bienvenido '+user.displayName,
                                        showConfirmButton: false,
                                        timer: 2000
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
                        .then(({ user }) => {
                                dispatch(
                                        login(user.uid, user.displayName)
                                )
                                Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Bienvenido '+user.displayName,
                                        showConfirmButton: false,
                                        timer: 2000
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
        }

}

export const logout = () => ({
        type: types.logout
})
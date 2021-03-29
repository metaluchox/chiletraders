// import { types } from "../types/types";
// import { firebase, googleAuthProvide } from "../firebase/firebase-config";
//  import { finishLoading, startLoading } from "./ui";
// import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";

const user = {
    
    nombre : 'luis',
    email: 'asd@asd.cl',
    password: 'asdasd',
    repassword: 'asdasd',


}

db.collection('user').add(user);
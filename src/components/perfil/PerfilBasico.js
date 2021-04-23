import React from 'react'
import Swal from 'sweetalert2'
import { loadUserById } from '../../helpers/loadUser';

export const PerfilBasico = (u) => {

    const infoUsuario= () =>{

    const usuario = loadUserById( u.user.uid );
    usuario.then(r =>{

        let photoUrl = r.photoUrl;
        if(r.photoUrl===null){
            photoUrl = "../assets/image/avatar7.png";
        }

        Swal.fire({
            showClass: {
                popup: 'animate__animated animate__bounceInUp'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              showConfirmButton: false,
              html:
        
        `       
        <div>
                <img className="mb-2" src="${photoUrl}" alt="" width="100"  /> 
        </div>
        <div>
        <p>${r.nombre}</p>           
        <p>${r.email}</p>
        </div>        
        `
          })   

    }); 

}
    return (
        <>
            <p onClick={infoUsuario}>{u.user.nombre}</p>
        </>
    )
}

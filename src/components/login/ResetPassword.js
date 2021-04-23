import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRecuperarPass } from '../../actions/auth';

export const ResetPassword = () => {
    const dispatch = useDispatch();

    const recuperarPass = async ()  =>{

        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address',
            showClass: {
                popup: 'animate__animated animate__bounceInUp'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
          })
          
          if (email) {
            dispatch( startRecuperarPass( email ) ); 
          }

    }

    return (
        <>
            <Link onClick={ recuperarPass } to="" className="text-center link" > <i class="bi bi-person-check"></i> Recuperar contraseña </Link>
        </>
    )
}

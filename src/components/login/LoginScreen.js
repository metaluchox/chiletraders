import React from 'react'
import { Button } from 'react-bootstrap';

export const LoginScreen = ({ history }) => {

    const ingresar = ( )=> {
        history.replace("/");
    }
    


    return (
        <div>
             HOLA SOY LOGIN SCREEN
                <br></br>

             <Button variant="outline-primary"
             onClick={ingresar}>
                 Login
            </Button>{' '}


        </div>
    )
}

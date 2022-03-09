import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const AddOrdenScreen = () => {
    const history = useHistory();

    const {isLogged}  = useSelector( state => state.auth );    

    const volver = () =>{
        history.push("/home");
    }

    return (
        <>
        <div className='container'>             
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h1 className='text-center'>Agregar Nota</h1>
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />

            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />

            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />

            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />

            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />

            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />                                  
        </div>

        <hr/>    

        <div className="d-grid gap-2">
            <button className="btn btn-secondary" type="button" onClick={volver} ><i className="bi bi-skip-start"> Volver</i></button>
        </div>

        </div>
    </>
    )
}

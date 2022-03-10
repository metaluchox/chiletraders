import React from 'react'
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';

export const VerOrdenScreen = () => {

    // const {isLogged}  = useSelector( state => state.auth );    


    return (
        <>
        <div className="container my-3 p-3 bg-body rounded shadow-sm">
            <h1> Ver Orden </h1>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" ><i className="bi bi-plus-circle"> Ir a PDF</i></button>
            </div>
        </div>
    </>
    )
}

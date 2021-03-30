import React from 'react'
import { Link } from 'react-router-dom';


export const NothingMessageScreen = () => {


    return (
        <>
        <div className="alert alert-warning text-center" role="alert">
            <strong><i className="bi bi-exclamation-diamond"></i> Sin Información </strong>
        </div>
        <div className="d-grid gap-2">
            <Link className="btn btn-outline-secondary" to="/" ><i className="bi bi-arrow-90deg-left"></i> Volver</Link>
        </div>

        </>

    )
}

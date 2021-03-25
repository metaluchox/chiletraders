import React, { useState } from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';

export const HomeScreen = () => {


    const [hideResults, setHideResults] = useState(true);
 

    const closeAlert = () =>{
        
        if(hideResults){
            setHideResults(false);
        }
        
    }

    return (
        <>

            {hideResults &&
                (
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        Bienvenido <strong> Luis </strong>
                        <button type="button" onClick={closeAlert} id="divAlertPerfil" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                )

            }

        <div className="row mb-3">
        <div className="col-sm-3 themed-grid-col">
            <ContentLeft />
        </div>

        <div className="col-sm-6 themed-grid-col">
            <ContentCenter />
        </div>

        <div className="col-sm-3 themed-grid-col">
            
            <ContentRigth />

        </div>
    </div>
    </>
    )
}

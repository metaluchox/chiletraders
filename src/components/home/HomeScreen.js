import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';

export const HomeScreen = () => {

    const {uid, name, isLogged}  = useSelector( state => state.auth );

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
                        <strong> Perfil </strong>:  <Link to={`/perfil/${ uid }`}> { name }</Link> 
                        <button type="button" onClick={closeAlert} id="divAlertPerfil" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                )

            }

        <div className="row mb-3">
        <div className="col-sm-3 themed-grid-col">
            <ContentLeft isLogged={ isLogged } />
        </div>

        <div className="col-sm-6 themed-grid-col">
            <ContentCenter />
        </div>

        <div className="col-sm-3 themed-grid-col">
            
            <ContentRigth  isLogged={ isLogged } />

        </div>
    </div>
    </>
    )
}

import React from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { useSelector } from 'react-redux';

export const HomeScreen = () => {


    const {isLogged}  = useSelector( state => state.auth );


    
    return (
        <>

        <div className="row mb-3">
        <div className="col-sm-3 themed-grid-col">
            <ContentLeft isLogged={ isLogged } />
        </div>

        <div className="col-sm-6 themed-grid-col">
            <ContentCenter />
        </div>

        <div className="col-sm-3 themed-grid-col">
            
            <ContentRigth isLogged={ isLogged } />

        </div>
    </div>
    </>
    )
}

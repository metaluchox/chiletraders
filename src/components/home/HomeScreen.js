import React from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';

export const HomeScreen = () => {


    return (
        <>

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

import React, { useState } from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { useSelector } from 'react-redux';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import { useHistory } from 'react-router';

export const HomeScreen = () => {

    const {isLogged}  = useSelector( state => state.auth );    
    const history = useHistory();



    
    const [crumbs] = useState(['Home']);
    const selected = crumb => {
     if(crumb==="Home"){
         history.push("/");
     }
   }

    return (
        <>
        <BreadcrumbScreen crumbs={ crumbs } selected={ selected } />
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

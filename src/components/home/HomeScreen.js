import React from 'react'
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';

export const HomeScreen = () => {
	const dispatch =useDispatch();
    const {isLogged}  = useSelector( state => state.auth );    

    dispatch( starLoadingTemas(20));

    return (
        <>
        <div class="p-4 bg-light">
        <div className="row mb-3">
            <div className="col-sm-2">
                <ContentLeft isLogged={isLogged} />
            </div>
            <div className="col-sm-8">
                <ContentCenter />
            </div>
            <div className="col-sm-2">
                <ContentRigth isLogged={isLogged} />
            </div>
        </div>
        </div>
    </>
    )
}

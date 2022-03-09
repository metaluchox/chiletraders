import React from 'react'
import { ContentRigth } from '../home/ContentRigth';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import './HomeScreen.css'

export const HomeScreen = () => {
	const dispatch =useDispatch();
    const {isLogged}  = useSelector( state => state.auth );    

    dispatch( starLoadingTemas(20));

    return (
        <>
        <div className='container'>
                <ContentRigth isLogged={isLogged} />
        </div>
    </>
    )
}

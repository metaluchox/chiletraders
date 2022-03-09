import React from 'react'
import { useDispatch } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { Footer } from '../ui/Footer';
import { NavBarPublic } from "../ui/NavBarPublic";
import { LoginConnect } from './LoginConnect';
import './LoginScreen.css'

export const LoginScreen = () => {
	const dispatch =useDispatch();
    dispatch( starLoadingTemas(15));
    return (
        <>
            <NavBarPublic />
            
            <LoginConnect />
            <Footer />

        </>
    )
}

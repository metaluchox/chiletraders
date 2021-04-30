import React from 'react'
import { useDispatch } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { Footer } from '../ui/Footer';
import { NavBarPublic } from "../ui/NavBarPublic";
import './LoginScreen.css'

export const LoginScreen = () => {
	const dispatch =useDispatch();
    dispatch( starLoadingTemas(15));
    return (
        <>
            <NavBarPublic />
            <div className="p-4 bg-light">
                <div className="row mb-3">
                    <div className="col-sm-2 ocultar-div">
                        <ContentLeft />
                    </div>
                    <div className="col-sm-8">
                        <h1 className="display-6 text-center">Últimos temas</h1>
                        <ContentCenter />
                    </div>
                    <div className="col-sm-2">
                        <ContentRigth />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

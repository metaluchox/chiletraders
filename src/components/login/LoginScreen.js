import React from 'react'
import { useDispatch } from 'react-redux';
import { starLoadingTemas } from '../../actions/temas';
import { ContentCenter } from '../home/ContentCenter';
import { ContentLeft } from '../home/ContentLeft';
import { ContentRigth } from '../home/ContentRigth';
import { Footer } from '../ui/Footer';
import { NavBarPublic } from "../ui/NavBarPublic";
export const LoginScreen = () => {
	const dispatch =useDispatch();
    dispatch( starLoadingTemas(15));
    return (
        <>
            <NavBarPublic />
            <div class="p-4 bg-light">
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <ContentLeft />
                    </div>
                    <div className="col-sm-6">
                        <ContentCenter />
                    </div>
                    <div className="col-sm-3">
                        <ContentRigth />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

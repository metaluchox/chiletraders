import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { MonedaConvertir } from './MonedaConvertir';

export const MonedaScreen = ({ nombre, valor }) => {
    const history = useHistory();
    const dispatch =useDispatch();

    return (
        <div className="alert alert-success text-center border border-success" role="alert" style={{cursor:"pointer"}} >

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12"> {nombre}  <br/><i className="fa fa-usd fa-lg"></i> {valor}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

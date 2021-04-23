import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';
import NumberFormat from 'react-number-format';
import { MonedaConvertir } from './MonedaConvertir';

export const MonedaDetailScreen = () => {
    const history = useHistory();
    const [crumbs] = useState(['Home', 'Monedas']);
    const monedas = useSelector(state => state.moneda.monedas);
    const validoContenido = monedas.length === 0;

 

    const selected = crumb => {
        if (crumb === "Home") {
            history.push("/");
        }
    }

    return (
        <>

            <BreadcrumbScreen crumbs={crumbs} selected={selected} />
            <div className="container" >
                <div className="row">
            {
                !validoContenido &&
                monedas.map(m => (

                    <div className="col-md-4 ms-md-auto border border-primary mb-1 rounded text-center" 
                    style={{cursor:"pointer"}} 
                    key={m.codigo}>
                        <div className="card-header">{m.nombre}</div>
                            <div className="card-body text-primary">
                                <h5 className="card-title">
                                    <NumberFormat value={m.valor} displayType={'text'} thousandSeparator={true} prefix={'$'} /> {m.unidad_medida}
                                </h5>
                                <div>Fecha {m.fecha}</div>
                            </div>
                            <div className="card-footer">
                                <MonedaConvertir data={m} />
                            </div>      
                            <div>
                                    
                            </div>                           
                    </div>                            

                ))
            }
            </div>
            </div>
        </>
    )
}

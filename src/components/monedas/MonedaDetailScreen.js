import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';

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

    console.log(monedas[0].codigo);

    return (
        <>

            <BreadcrumbScreen crumbs={crumbs} selected={selected} />

            {
                !validoContenido &&
                monedas.map(m => (
                    <div class="alert alert-primary" role="alert">
                            {m.codigo}<br/>
                            {m.nombre}<br/>
                            {m.unidad_medida}<br/>
                            {m.fecha}<br/>
                            {m.valor}<br/>
                    </div>
                ))
            }
        </>
    )
}

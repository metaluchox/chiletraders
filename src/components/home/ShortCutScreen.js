import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { MonedaConvertir } from '../monedas/MonedaConvertir';
import NumberFormat from 'react-number-format';

export const ShortCutScreen = ( request ) => {
    const monedas = useSelector(state => state.moneda.monedas);
    const validoContenido = monedas.length === 0; 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            {

                <div>
                    <Slider {...settings} >
                        {
                            !validoContenido &&
                            monedas.map(m => (

                                <div className="col-md-4 ms-md-auto border border-primary mb-1 rounded text-center"
                                    style={{ cursor: "pointer" }}
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
                                </div>
                            ))
                        }
                    </Slider>
                </div>
               
            }
        </>
    )
}

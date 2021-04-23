import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

export const MonedaConvertir = ({ data }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [valor, setValor] = useState({
        valor1uf : '0',
        valor2uf : '0',
    });

    const handleInputChange = (e) =>{
        setValor({
            ...valor,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <div onClick={handleShow} className="link">
                Calcular <i className="bi bi-zoom-in"></i>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="alert alert-primary text-center">
                    <Modal.Title >{data.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">{data.codigo}</span>
                    <input type="number" className="form-control" placeholder={data.codigo}
                        id="valor1"
                        name="valor1"
                        onChange={handleInputChange}
                    />
                    <span className="input-group-text" id="basic-addon1">{data.unidad_medida}</span>
                    <input type="number" className="form-control" placeholder={data.unidad_medida}
                        id="valor2"
                        name="valor2"
                        onChange={handleInputChange}
                       
                    />
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-6">
                            <div className="alert alert-warning" role="alert">
                                <NumberFormat 
                                    value={valor.valor1 * data.valor} 
                                    displayType={'text'} 
                                    decimalScale={2}
                                    thousandSeparator={true} prefix={'$'} /> <br/>{data.unidad_medida}
                            </div>
                    </div>
                    <div className="col-6">
                        <div className="alert alert-warning" role="alert">
                            <NumberFormat 
                                value={valor.valor2 / data.valor}
                                displayType={'text'} 
                                thousandSeparator={true} 
                                decimalScale={2}
                                prefix={'$'} /> <br/>{data.codigo}
                        </div> 
                    </div>
                    </div>

                </div>
                 </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} block>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

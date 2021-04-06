import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewTema } from '../../actions/temas';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { fileUpload } from '../../helpers/fileUpload';
import CKEditor from 'ckeditor4-react';



export const CrearTemaScreen = () => {

    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const history = useHistory();
    const [btnSave, setBtnSave] = useState(false);    
    let urlFileImage = "";

    const [formValues, handleInputChange] = useForm({
        titulo: '',
        descripcion: '',
        fileSelector: '',
    })
    

    const { titulo, descripcion, fileSelector } = formValues;


    // Envio data a api
    const saveTema = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startNewTema(uid, titulo, descripcion, true, urlFileImage))

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Creado',
                showConfirmButton: false,
                timer: 1500
            })

            history.push("/crearTema");

        };

    }


    //Validacion de Formulario
    const isFormValid = () => {

        if (titulo.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese el titulo.',
            })

            setBtnSave(false);

            return false;

        } else if (descripcion.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese la descripcion.',
            })

            setBtnSave(false);

            return false;
        } 

        return true;
    }

    // Cargo imagen de API
    const cargaClick = () => {
        document.querySelector('#fileSelector').click();
    }

//     (async () => {

//     const ipAPI = '//api.ipify.org?format=json'

//     const inputValue = fetch(ipAPI)
//       .then(response => response.json())
//       .then(data => data.ip)
    
//     const { value: ipAddress } = await Swal.fire({
//       title: 'Enter your IP address',
//       input: 'text',
//       inputLabel: 'Your IP address',
//       inputValue: inputValue,
//       showCancelButton: true,
//       inputValidator: (value) => {
//         if (!value) {
//           return 'You need to write something!'
//         }
//       }
//     })
    
//     if (ipAddress) {
//       Swal.fire(`Your IP address is ${ipAddress}`)
//     }


// })()



    const handlefileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {


              Swal.fire({

                title: 'Cargando...',
                text: 'Espere un momento.',
                showConfirmButton: false,
                allowOutsideClick: false,
                    willOpen : () => {
                        Swal.showLoading();
                    }
              });


            const result =  await fileUpload(file);     
            Swal.close();


            if (result === undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Format incorrect!',
                    footer: 'image with format allowed png-jpeg-jpg'
    
                })
            }else{
                const reader = new FileReader();
                reader.onload = (e) => {
                    Swal.fire({
                      title: 'Your uploaded picture',
                      imageUrl: e.target.result,
                      imageAlt: 'The uploaded picture'
                    })
                  }
                reader.readAsDataURL(file)                
                urlFileImage = result;
            }
    
        
        }
    }





    return (
        <>

            <div className="card">
                <div className="card-body">
                    <h1 className="text-center"><i className="bi bi-list-check"></i> Crear </h1>

                    <form
                        onSubmit={saveTema}
                        method="post">
                        <div className="form-row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            type="file"
                                            id="fileSelector"
                                            name="fileSelector"
                                            style={{ display: 'none' }}
                                            onChange={handlefileChange}
                                            value={fileSelector}
                                        />
                                        <br />
                                    </div>

                                    <div className="col-md-12">
                                        <input id="titulo"
                                            name="titulo"
                                            placeholder="Titulo"
                                            className="form-control"
                                            type="text"
                                            value={titulo}
                                            onChange={handleInputChange}
                                        />
                                        <br />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea type="text"
                                            className="form-control"
                                            id="descripcion"
                                            placeholder="Ingrese texto"
                                            rows="3"
                                            name="descripcion"
                                            value={descripcion}
                                            onChange={handleInputChange}
                                        />
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-grid gap-2">
                                            <button type="button" onClick={cargaClick} className="btn btn-outline-success">
                                                <i className="bi bi-cloud-arrow-up"></i> Cargar Imagen
                                            </button>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-md-12">

                                        <div className="d-grid gap-2">
                                            <button type="button" className="btn btn-outline-danger"
                                                onClick={saveTema}
                                                disabled={btnSave}>
                                                <i className="bi bi-life-preserver"></i> Guardar</button>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-grid gap-2">
                                            <Link className="btn btn-outline-secondary" to="/listarTema" >
                                                <i className="bi bi-arrow-return-left"></i> Volver
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                />


                        </div>
                        <div>

                            <br />

                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewTema } from '../../actions/temas';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { fileUpload } from '../../helpers/fileUpload';
import CKEditor from 'ckeditor4-react';
import { BreadcrumbScreen } from '../breadcrumb/BreadcrumbScreen';



export const CrearTemaScreen = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const [btnSave, setBtnSave] = useState(false);    
    let urlFileImage = "";

    let [formValues, handleInputChange] = useForm({
        titulo: '',
        descripcion: '',
        fileSelector: '',
    })

    let { titulo, descripcion, fileSelector } = formValues;
 
    const handleChangeEditor = (e) =>{
        descripcion = e.editor.getData();
        document.getElementById('textTema').innerHTML = descripcion
    }

    const saveTema = (e) => {
        e.preventDefault();

        const textTemaFinal = document.getElementById('textTema').value;

        if (isFormValid(textTemaFinal)) {
            dispatch(startNewTema(auth, titulo, textTemaFinal, true, urlFileImage))

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Creado',
                showConfirmButton: false,
                timer: 1500
            })

            history.push("/listarTema");

        };

    }


    //Validacion de Formulario
    const isFormValid = (textTemaFinal) => {

        if (titulo.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese el titulo.',
            })

            setBtnSave(false);

            return false;

        } else if (textTemaFinal.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese la descripcion.',
            })

            setBtnSave(false);

            return false;
        } 

        return true;
    }

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


            const urlFileImage =  await fileUpload(file); 
            Swal.close();


            if (urlFileImage === undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Format incorrect!',
                    footer: 'image with format allowed png-jpeg-jpg',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                    allowOutsideClick: false
    
                })
            }else{
                const reader = new FileReader();
                reader.onload = (e) => {
                    Swal.fire({
                      imageUrl: e.target.result,
                      allowOutsideClick: false,
                      showDenyButton: false,
                      showCancelButton: false,
                      confirmButtonText: `Copiar url Imagen `,
                      denyButtonText: `Don't save`,
                      showClass: { popup: 'animate__animated animate__fadeInDown' },
                      hideClass: { popup: 'animate__animated animate__fadeOutUp' },                      
                    }).then((result) => {
                      if (result.isConfirmed) {
                        const r = copiarAlPortapapeles(urlFileImage);

                        Swal.fire( 
                            'Url copiada! ',
                            r, 
                            'success')
                      }                      
                    })
                  }
                reader.readAsDataURL(file)                
            }        
        }
    }

    // Copia a Papelera
    const copiarAlPortapapeles = (urlFileImage) => {
        var copyText = document.getElementById("url");
        copyText.value = urlFileImage;
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        return copyText.value;

    }

    // Cargo imagen de API
    const cargaClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const copiarurl = () => {
        const url = document.getElementById("url").value;

        if (url !== "") {
            copiarAlPortapapeles(url);

            Swal.fire(
                'Url copiada! ',
                url,
                'success')
        }
    }

    const [crumbs] = useState(['Home', 'Listar', 'Crear']);
    const selected = crumb => {
        if(crumb==="Home"){
            history.push("/");
        }
        if(crumb==="Listar"){
            history.push("/listarTema");
        }     
   }

    return (
        <>
            <BreadcrumbScreen crumbs={ crumbs } selected={ selected } />

            <div className="card">
                <div className="card-body">
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
                                        <div className="input-group input-group-sm mb-3">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="bi bi-clipboard-check">  Copiar Url</i>
                                            </span>
                                            <input
                                                type="text"
                                                id="url"
                                                name="url"
                                                value=""
                                                className="form-control"
                                                readOnly
                                                onClick={copiarurl}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                    <textarea id="textTema" name="textTema" style={{display: 'none'}} ></textarea>

                                    <CKEditor
                                            onChange={handleChangeEditor}
                                            config={{
                                                toolbar: [
                                                    { name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates' ] },
                                                    { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
                                                    { name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
                                                    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
                                                    { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
                                                    { name: 'insert', items: [ 'Image', 'Table'] },
                                                    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
                                                    { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] }                                 
                                                ]
                                            }}                                              
                                    />
                                    <br />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-grid gap-2">
                                            <button type="button" onClick={cargaClick} className="btn btn-outline-success btn-sm">
                                                <i className="bi bi-cloud-arrow-up"></i> Cargar Imagen
                                            </button>
                                        </div>
                                        <br />
                                    </div>                                    
                                    <div className="col-md-12">

                                        <div className="d-grid gap-2">
                                            <button type="button" className="btn btn-outline-primary btn-sm"
                                                onClick={saveTema}
                                                disabled={btnSave}>
                                                <i className="bi bi-life-preserver"></i> Guardar</button>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-grid gap-2">
                                            <Link className="btn btn-outline-secondary btn-sm" to="/listarTema" >
                                                    <i className="bi bi-back"></i> Cerrar
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>




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

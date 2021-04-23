import React, { useState }  from 'react';
import Swal from 'sweetalert2';
import { fileUpload } from '../../helpers/fileUpload';
import { startAddComentario } from "../../actions/comentarios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ButtonGroup, Button } from 'react-bootstrap';
import CKEditor from 'ckeditor4-react';


export const CrearComentarioScreen = ( {idTema, user} ) => {

    const dispatch = useDispatch();   
    const history = useHistory();
    const [showComentario, setShowComentario] = useState(false);

    let [datos, setDatos] = useState({
            textComentario : ''
    });

    let { textComentario } = datos;

    const handleChangeEditor = (e) =>{
        textComentario = e.editor.getData();
        document.getElementById('textComentario').innerHTML = textComentario
    

    }

    const enviarDatos = (e) => {
        e.preventDefault();
        const textComentarioFinal = document.getElementById('textComentario').value;
        if(validarForm(textComentarioFinal)){
            dispatch(startAddComentario (idTema, textComentarioFinal, user));
            history.push("/tema");
        }      
    }



    const validarForm = (textComentarioFinal) =>{
        if(textComentarioFinal.trim().length===0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, the comment can not is empty!',
              })
              return false;
        }
        return true;
    }

    const handleTextAreaChange = (e) =>{

        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
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

    const showDivComentario = () => {
        (showComentario) ? setShowComentario(false) : setShowComentario(true) 
    }

    return (
      <>
{ !showComentario &&
<div className="row">
                <ButtonGroup size="sm">
                    <Button variant="secondary" onClick={showDivComentario}><i className="bi bi-chat-right-text"> Comentar {showComentario}</i></Button>
                </ButtonGroup>
</div>
}

{ showComentario &&



<form onSubmit={enviarDatos}>
            <div className="alert alert-secondary" aria-label="Close">
            <div className="row">    
                    <div className="col-md-12">
                        <input
                            type="file"
                            id="fileSelector"
                            name="fileSelector"
                            style={{ display: 'none' }}
                            onChange={handlefileChange}                            
                        />                        
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
                        <input
                            type="text"
                            id="url"
                            name="url"
                            value=""
                            className="form-control"
                            readOnly
                        />
                        <br />
                    </div>                    
                    <div className="col-md-12  d-grid">
                    <textarea id="textComentario" name="textComentario" onChange={handleTextAreaChange} style={{display: 'none'}} ></textarea>

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
                    

                    </div>

                    <br/> <br/> <br/> <br/> <br/>



                    <div className="col-md-12 d-grid gap-2">
                        <button type="submit" id="btnComentar" name="btnComentar" className="btn btn-secondary btn-sm" >
                            <i className="bi bi-chat-right-text"></i> Comentar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={showDivComentario}>
                                <i className="bi bi-x-circle"></i> Cerrar
                        </button>
                    </div>

                </div>      
                <br/>                                       
      
            </div>
            </form>




}


      </>
    )
    
}
import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



export const TemaScreen = () => {
    const { active } = useSelector(state => state.tema);
    const  auth = useSelector(state => state.auth);
    const history = useHistory();


    if(active===null){
        return <Redirect to="/listarTema" />
    }

    console.log(active, auth);

    const verImage = () =>{

        Swal.fire({
            imageUrl: 'https://res.cloudinary.com/dqbiuijfd/image/upload/v1617561107/chiletraders/nj7sba5ztnqq3ix0snam.jpg',
            imageWidth: "auto",
            imageAlt: 'A tall image'
          })
    
    }

    return (
        <>
            <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary" to="/listarTema" >Volver</Link>
            </div>
            <br/> 

            <div className="container-fluid border-primary">
                <div className="row">
                    <div className="col-md-2 border text-center">
                        {auth.name}
                    </div>
                    <div className="col-md-10 border">
                        <div className="col-md-12 text-left">
                                <h5>{active.titulo}</h5>
                                <p>{active.descripcion}</p>
                        </div>                       
                    </div>                                    
                </div>
                <div className="row border">
                        {active.url}
                </div>
                <div className="row">
                    <div className="col-md-6 text-light text-center bg-danger">
                                Calificar
                    </div>  
                    <div className="col-md-6 text-light text-center bg-secondary">
                                Comentar
                    </div> 



                </div>


 

            </div>

            <br/>
            <div className="d-grid gap-2">
                <Link className="btn btn-outline-secondary" to="/listarTema" >Volver</Link>
            </div>


        </>
    )
}

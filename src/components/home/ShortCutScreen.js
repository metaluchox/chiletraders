import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Swal from 'sweetalert2';
import { startLogout } from '../../actions/auth';
import { starLoadingUsuarioById } from "../../actions/user";

export const ShortCutScreen = ( request ) => {
    const {uid}  = useSelector( state => state.auth );
    const history = useHistory();
    const dispatch =useDispatch();

    const salirApp = () => {
        Swal.fire({
          title: 'Estas seguro?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.isConfirmed) {
              dispatch( startLogout() );
              history.push("/login");
          }
        })
    
      }

      const handleInfoUsuario = () =>{
        dispatch(starLoadingUsuarioById(uid));
        setTimeout(() => {
            history.push("/miPerfil");
        }, 500);
      }

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
        
        (request.isLogged===true) &&  ( 
        <div>
            <Slider {...settings} >
                <div className="container link text-center" onClick={handleInfoUsuario} >
                    <div className="alert alert-primary" role="alert">
                         <i className="bi bi-person-circle"> Perfil </i>
                    </div>
                </div>
                <Link className="container link text-center" as={Link} to="/crearTema">
                    <div className="alert alert-primary" role="alert">
                        <i className="bi bi-bookmark-star"> Crear Tema </i>
                    </div>
                </Link>
                <div className="container linkOff text-center">
                    <div className="alert alert-primary" role="alert">
                        Listas de temas
                    </div>
                </div>
                <div className="container linkOff text-center">
                    <div className="alert alert-primary" role="alert">
                        Reglas
                    </div>
                </div>
                <div className="container link text-center" onClick={salirApp}>
                    <div className="alert alert-danger" role="alert">
                        <i className="bi bi-power"> Cerrar sesión</i>
                    </div>
                </div>                
            </Slider>
            <br/><br/>
        </div>
   ) 
}
</>
    )
}

import React from 'react'
export const Footer = () => {

//   const love = () => {
//     Swal.fire({
//       showClass: {
//         popup: 'animate__animated animate__bounceInUp'
//       },
//       hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//       },
//       html:

// `
// <div class="alert alert-light" role="alert">
// <strong>chiletraders.cl</strong> corre en los siguientes servicios: 
// </div>
// <div class="alert alert-warning" role="alert">
// <img className="mb-2" src="../../assets/image/touchicon-180.png" alt="" width="50"  />
// Firebase 
// </div>
// <div class="alert alert-primary" role="alert">
// <img className="mb-2" src="../../assets/image/cloudinary_icon.png" alt="" width="50"  />
//       Cloudinary
// </div>
// <div class="alert alert-secondary" role="alert">
// <img className="mb-2" src="../../assets/image/server.png" alt="" width="50"  />
//       Servidores Propios de la comunidad
// </div>

// <div class="alert alert-light" role="alert">
//       <p>Si deseas contribuir para apoyan al proyecto puedes hacer una donación por la cantidad que gustes.</p>
//       <div class="container">
//       <div class="row align-items-start">
//         <div class="col">
//           <img className="mb-2" src="../../assets/image/paypal.png" alt="" width="100"  />
//           <p>Paypal</p>
//         </div>
//         <div class="col">
//           <img className="mb-2" src="../../assets/image/binance-smart.png" alt="" width="50"  />
//           <p>Criptomoneda</p>
//         </div>
//       </div>
// </div>

// `
//     })
  
//   }
  
  return (
    <>   
    <div className="mt-5"></div>
      <footer className="pt-2 my-md-2 pt-md-2 border-top text-white-50 footer-custom_ct fixed-bottom">
    <div className="row">
      <div className="col-6 col-md text-center">
        <h5>Sobre chiletraders <i className="bi bi-arrow-down-right"></i><i className="bi bi-arrow-up-right"></i></h5>
      </div>
      <div className="col-6 col-md">

        <h5>Redes social</h5>
        <ul className="list-unstyled text-small" style={{cursor:"pointer"}} >
        <li className="mb-1">
          <i className="bi bi-telegram mb-10"></i> <i className="bi bi-twitter"></i> <i className="bi bi-facebook"></i> <i className="bi bi-instagram"></i> <i className="bi bi-youtube"></i>
          
        </li>
        </ul>        
      </div>
      <div className="col-6 col-md imagenToro">
         
      </div>
    </div>
  </footer>
    </>
  )
}

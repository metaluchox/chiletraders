import React from 'react';
import { LoginConnect } from '../login/LoginConnect';

export const ContentRigth = ( request ) => {
  
  return (
    <>
      <div className="col">
      {
        ( request.isLogged!==true &&  <LoginConnect /> ) 
        
      }
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <img alt="Coca cola"
            src="https://i.blogs.es/b17cc2/blockchain-3446557_1280/450_1000.jpg" width="100%" />
        </div>
      </div>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <script data-ad-client="ca-pub-9540553176969950" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </div>          
        </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
            <script data-ad-client="ca-pub-9540553176969950" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
      </div>

    </>
  )
}

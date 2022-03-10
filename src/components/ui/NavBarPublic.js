 /*eslint-disable */
import React from 'react'
import { useHistory } from 'react-router-dom';
import './NavBar.css';

export const NavBarPublic = () => {
  const history = useHistory();
   
  const home = () =>{
    history.push("/");
  } 

  return (  
    <>  
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
          <a className="navbar-brand cursorPointer" onClick={home} >
              <img src="../../assets/image/peugeot_ico.png" alt="" width="30" height="24"></img> Gafa repuesto 
          </a>
      </nav>
    </header>
    <div className="mt-5"></div>
    </>
  )
}
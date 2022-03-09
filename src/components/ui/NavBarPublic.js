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
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container text-center">
          <a className="navbar-brand" onClick={home} >Gafa repuesto </a>
        </div>
      </nav>
    </header>
    <div className="mt-5"></div>
    </>
  )
}
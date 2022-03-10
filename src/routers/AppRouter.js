import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { firebase } from "../firebase/firebase-config";

import { LoginConnect } from '../components/login/LoginConnect';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { ReglasScreen } from '../components/reglas/ReglaScreen';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { loadUserById } from '../helpers/loadUser';

export const AppRouter = () => {


  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

      firebase.auth().onAuthStateChanged( async ( user ) => {
        if(user?.uid){

          const usuario = await loadUserById( user.uid ); 
          
            dispatch(login(user.uid, user.displayName, usuario.admin))
            setIsLoggedIn( true );
        }else{
            setIsLoggedIn(false);
        }

        setCheking(false);

      })
    
  }, [ dispatch, setCheking, setIsLoggedIn ])


  if(cheking){

      return(
        <>

<div className=" loadingDivCt row text-center">
  <div className="col-md-12">
    <div className="thumbnail">
      <a href="/w3images/lights.jpg">
      <img id="logo"
              src="../../assets/image/peugeot_ico.png"
              width="25%"
              alt="Chile Traders"
              
            />
        <div className="caption">
        <img id="logo"
              src="../../assets/image/Comp_14.gif"
              width="30%"
              alt="Chile Traders"
            />         
        </div>
      </a>
    </div>
    <h1 className="text-light">Cargando ...</h1>
  </div>
</div>   

</>
      )

  }

    return (
      <Router>
          <Switch>
            <PublicRoute 
            exact path="/login" 
            component={LoginScreen}
            isAuthenticated={isLoggedIn} />

            <PublicRoute 
            exact path="/loginConnect" 
            component={LoginConnect}
            isAuthenticated={isLoggedIn} />            

            <PublicRoute 
            exact path="/Register" 
            component={RegisterScreen}
            isAuthenticated={isLoggedIn} />

            <Route 
            exact path="/ruler" 
            component={ReglasScreen} />
            

            <PrivateRoute 
              path="/"
              component={HomeRouter} 
              isAuthenticated={isLoggedIn} />
          </Switch>
      </Router>
    )
}

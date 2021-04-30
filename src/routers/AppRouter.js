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
          <div className="col-auto p-5 text-center bg-primary row justify-content-center align-items-center" role="alert">
            <img id="logo"
              src="../../assets/image/chiletraderslogosinfondo.png"
              width="40%"
              alt="Chile Traders"
            />
            <img id="logo"
              src="../../assets/image/Comp_14.gif"
              width="100%"
              alt="Chile Traders"
            />
            <h4 className="text-light">
              Loading...
            </h4>            
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

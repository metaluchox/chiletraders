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
import { MonedaDetailScreen } from '../components/monedas/MonedaDetailScreen';

export const AppRouter = () => {


  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

      firebase.auth().onAuthStateChanged( ( user ) => {

        if(user?.uid){

            dispatch(login(user.uid, user.displayName));
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

      <div className="loadingDivCt text-light text-center " role="alert">
        <h1 className="alert-heading">
                  Loading...
          </h1>
          <div className="spinner-grow text-light" role="status">
          <h1><span className="sr-only"></span></h1>
        </div>
        <hr />
        <p className="mb-0">

             <img id="logo" 
                  src="../../assets/image/chiletraderslogosinfondo.png"
                  width="40%"
                  alt="Chile Traders" 
            />

        </p>
      </div>

</>
      )

  }


  


    return (
      <Router>
          <div className="container">
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

          {/* <Route 
            exact path="/monedaDetalle" 
            component={MonedaDetailScreen} />             */}

            <PrivateRoute 
              path="/"
              component={HomeRouter} 
              isAuthenticated={isLoggedIn} />
          </Switch>
          </div>
      </Router>
    )
}

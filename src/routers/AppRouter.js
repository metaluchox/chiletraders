import React, { useEffect, useState }/*, { useContext }*/ from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { firebase } from "../firebase/firebase-config";

// import { AuthContext } from '../auth/AuthContext';
import { LoginConnect } from '../components/login/LoginConnect';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { ReglasScreen } from '../components/reglas/ReglaScreen';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

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

          <h1>Espere </h1>        
      )

  }

// const { user } = useContext(AuthContext);

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

          <PrivateRoute 
            exact path="/ruler" 
            component={ReglasScreen}
            isAuthenticated={isLoggedIn} />

            <PrivateRoute 
              path="/"
              component={HomeRouter} 
              isAuthenticated={isLoggedIn} />
          </Switch>
          </div>
      </Router>
    )
}

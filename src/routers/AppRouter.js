import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginConnect } from '../components/login/LoginConnect';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { ReglasScreen } from '../components/reglas/ReglaScreen';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

const { user } = useContext(AuthContext);

    return (
      <Router>
          <div className="container">
          <Switch>
            <PublicRoute 
            exact path="/login" 
            component={LoginScreen}
            isAuthenticated={user.logged} />

            <PublicRoute 
            exact path="/loginConnect" 
            component={LoginConnect}
            isAuthenticated={user.logged} />            

            <PublicRoute 
            exact path="/Register" 
            component={RegisterScreen}
            isAuthenticated={user.logged} />

           <PublicRoute 
            exact path="/ruler" 
            component={ReglasScreen}
            isAuthenticated={user.logged} />

            <PrivateRoute 
              path="/"
              component={HomeRouter} 
              isAuthenticated={user.logged} />
          </Switch>
          </div>
      </Router>
    )
}

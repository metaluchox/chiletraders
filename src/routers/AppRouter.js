import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
    return (
      <Router>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/Register" component={RegisterScreen} />
            <Route path="/" component={HomeRouter} />
          </Switch>
      </Router>
    )
}

import './App.css';
// import React, { useEffect, useReducer } from 'react';
import React from 'react';
import { Provider } from "react-redux";

import { AppRouter } from './routers/AppRouter';
// import { AuthContext } from './auth/AuthContext';  // Esta es opcion antigua del click
// import { authReducer } from './auth/authReducer';
import { store } from './store/store';

// const init = () => {
//   return JSON.parse(localStorage.getItem('user')) || {
//     logged: false
//   };
// }

export const App = () => {
  // const [user, dispatch] = useReducer(authReducer, {}, init)    // Esta es opcion antigua del click

  // useEffect(() => {    // Esta es opcion antigua del click
  //   localStorage.setItem('user', JSON.stringify(user)); // Esta es opcion antigua del click
  //  }, [user]) // Esta es opcion antigua del click

  return (

    // <AuthContext.Provider value={{ user, dispatch }}>    // Esta es opcion antigua del click
    //   <AppRouter />                                     // Esta es opcion antigua del click
    // </AuthContext.Provider>                             // Esta es opcion antigua del click

    <Provider store={ store }>
        <AppRouter />
    </Provider>

  )
}
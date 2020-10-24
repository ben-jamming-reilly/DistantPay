import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
//import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// Routes
import PrivateRoute from "./components/routing/PrivateRoute";

// Authentication
import Auth from "./components/auth/Auth";

// Landing
import NavigationBar from "./components/layout/NavigationBar";

// Socket
import io from "socket.io-client";

// Style
import { Container } from "react-bootstrap";
import "./App.css";

const ENDPOINT = "http://127.0.0.1:5000";
const socket = io(ENDPOINT);

/*
if (localStorage.token) {
  setAuthToken(localStorage.token);
}*/

const App = () => {
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavigationBar/>
        <br/>
        <Route exact path='/'/>
        <section className='container'>
          <Switch>
            <Route exact path='/auth' component={Auth}/>
            <PrivateRoute />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>);
};

export default App;

import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// Routes
import PrivateRoute from "./components/routing/PrivateRoute";

// Authentication
import Auth from "./components/auth/Auth";

// Layout
import NavigationBar from "./components/layout/NavigationBar";
import Alarm from "./components/layout/Alarm";

// Auth
import Hub from "./components/admin/Hub";
import AuthMenu from "./components/item/AuthMenu";

// Socket
import io from "socket.io-client";

// Style
import "./App.css";

const ENDPOINT = "http://127.0.0.1:5000";
const socket = io(ENDPOINT);

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavigationBar />
          <Alarm />
          <Route exact path='/' />
          <section className='container'>
            <Switch>
              <Route exact path='/auth' component={Auth} />
              <PrivateRoute exact path='/items' component={AuthMenu} />
              <PrivateRoute exact path='/hub' component={Hub} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

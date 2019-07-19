import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma';

import * as serviceWorker from './serviceWorker';
import Provider from './components/Provider';
import Nav from './components/Nav';
import Home from './pages/home';
import UploadImage from './components/UploadImage';

const AppRouter = () => (
  <Router>
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/upload" exact component={UploadImage} />
  </Router>
);

ReactDOM.render(
  <Provider>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

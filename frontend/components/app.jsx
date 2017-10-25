import React from 'react';
import { Route, Redirect, Link,  HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page';
import SessionFormContainer from './session/session_form_container';
import Profile from './profile/profile';
import BeerIndex from './beers/beers_index_container';
import BeerForm from './beers/beer_form_container.jsx';

const App = () => (
  <div>
    <AuthRoute path="/" component={SplashPage} />
    <Switch>
      <ProtectedRoute path="/users" component={Profile} />
      <ProtectedRoute exact path="/beers/new" component={BeerForm} />
      <ProtectedRoute path="/beers/:beerId/edit" component={BeerForm} />
      <ProtectedRoute exact path="/beers" component={BeerIndex} />
    </Switch>
  </div>
);

export default App;

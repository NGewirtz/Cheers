import React from 'react';
import { Route, Redirect, Link,  HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page';
import SessionFormContainer from './session/session_form_container';
import Profile from './profile/profile';
import BeerIndex from './beers/beers_index_container';
import BeerForm from './beers/beer_form_container.jsx';
import BeerShow from './beers/beer_show_container.jsx';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/users" component={Profile} />
      <ProtectedRoute exact path="/beers/new" component={BeerForm} />
      <ProtectedRoute path="/beers/:beerId/edit" component={BeerForm} />
      <ProtectedRoute path="/beers/:beerId" component={BeerShow} />
      <ProtectedRoute exact path="/beers" component={BeerIndex} />
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;

import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page';
import SessionFormContainer from './session/session_form_container';
import Profile from './profile/profile_container';
import ProfileForm from './profile/profile_form_container';
import BeerIndex from './beers/beers_index_container';
import BeerForm from './beers/beer_form_container.jsx';
import BeerShow from './beers/beer_show_container.jsx';
import Bar from './checkin/checkin_index_container.jsx';
import CheckinForm from './checkin/checkin_form_container.jsx';
import CheckinShow from './checkin/checkin_show_container.jsx';
import Header from './header';

const App = ({id}) => (
  <div className="wrapper">
    <ProtectedRoute path="/" component={Header} />
    <Switch>
      <ProtectedRoute exact path={`/users/${id}/edit`} component={ProfileForm} />
      <ProtectedRoute path="/users/:userId" component={Profile} />
      <ProtectedRoute exact path="/beers/new" component={BeerForm} />
      <ProtectedRoute path="/beers/:beerId/edit" component={BeerForm} />
      <ProtectedRoute path="/beers/:beerId/checkin" component={CheckinForm} />
      <ProtectedRoute path="/beers/:beerId" component={BeerShow} />
      <ProtectedRoute path="/checkins/:checkinId" component={CheckinShow} />
      <ProtectedRoute exact path="/beers" component={BeerIndex} />
      <ProtectedRoute exact path="/bar" component={Bar} />
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;

import React from 'react';
import { Route, Redirect, Link,  HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash_page';
import SessionFormContainer from './session/session_form_container';


const App = () => (
  <div>
    <AuthRoute path="/" component={SplashPage} />
  </div>
);

export default App;

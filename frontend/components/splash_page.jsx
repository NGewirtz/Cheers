import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

const SplashPage = () => {
  return (
    <div className="splash">
      <header>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/signup'>Signup</Link></button>
      </header>
      <section>
        <h1>CHEERS!</h1>
        <h2>Join us at the bar</h2>
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </Switch>
      </section>
    </div>
  );
};

export default SplashPage;

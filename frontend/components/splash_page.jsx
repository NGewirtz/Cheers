import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import { guestLogin } from '../actions/session_actions';
import { connect } from 'react-redux';

const SplashPage = (props) => {
  document.title = "CHEERS!";
  return (
    <div className="splash">
      <header>
        <div>
          <button className="guest" onClick={props.guestLogin}>Guest</button>
          <a href="https://www.youtube.com/watch?v=CvCPK7ie3wA&feature=youtu.be"
            target="_blank">
            DEMO
          </a>
        </div>
      </header>
      <section>
        <h1 className="home-logo">CHEERS!</h1>
        <h2>Join us at the bar</h2>
        <div>
          <button><Link to='/login'>Login</Link></button>
          <button><Link to='/signup'>Signup</Link></button>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    guestLogin: () => dispatch(guestLogin())
  };
};

export default connect(null, mapDispatchToProps)(SplashPage);

import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import React from 'react';

const Header = (props) => (
  <header className="main-header">
    <nav>
      <Link to="/" className="header-logo">CHEERS!</Link>
      <Link to='/bar' className="header-link">The Bar</Link>
      <Link to='/beers' className="header-link">Top Beers</Link>
    </nav>

    <ul className="user-header">
      <li>
        <img className="user-header-img" src={props.userImg} />
        <ul className="user-options">
          <li><Link to="/users/:id">Profile</Link></li>
          <li><Link to="/users/:id/edit">Edit Profile</Link></li>
          <li onClick={props.logout}>Logout</li>
        </ul>
      </li>
    </ul>
  </header>
);


const mapStateToProps = (state) => {
  return {
    username: state.session.username,
    userImg: state.session.userImg
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

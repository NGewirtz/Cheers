import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

const Test = () => <h1>TEST</h1>;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {
      currentUser: window.currentUser.username,
      userImg: window.currentUser.img_url
    }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
  }else {
    store = configureStore();
  }
  window.logout = logout;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

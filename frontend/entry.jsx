import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { fetchBeer } from './actions/beer_actions';


const Test = () => <h1>TEST</h1>;

document.addEventListener("DOMContentLoaded", () => {
  let store, id;
  if (window.currentUser) {
    const preloadedState = { session: {
      currentUser: window.currentUser.username,
      userImg: window.currentUser.image,
      id: window.currentUser.id
    }
  };
  store = configureStore(preloadedState);
  id = window.currentUser.id;
  delete window.currentUser;
  }else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

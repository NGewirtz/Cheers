import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store, id }) => (
  <Provider store={store}>
    <HashRouter>
      <App id={id}/>
    </HashRouter>
  </Provider>
);

export default Root;

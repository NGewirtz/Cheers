import React from 'react';
import ReactDOM from 'react-dom';

const Test = () => <h1>TEST</h1>;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Test />, root);
});

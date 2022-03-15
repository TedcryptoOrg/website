import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './Providers';
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Providers>,
  document.getElementById("root")
);

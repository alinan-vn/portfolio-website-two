import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Nav from './components/global/nav/index';
import Footer from './components/global/footer/index';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <body>
    <Nav />
    <main>
      <App />
    </main>
  </body>,
  document.getElementById('root')
);

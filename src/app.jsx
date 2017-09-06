// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Grabs the Routes
// import routes from './config/react-routes.jsx';
import Main from './components/Main.jsx';

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

// Renders the contents according to the route page.
ReactDOM.render(<App />, document.getElementById("app"));


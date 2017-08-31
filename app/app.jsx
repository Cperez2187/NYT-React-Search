// Include the Main React Dependencies
import React from 'react';
import ReactDom from 'react-dom';

// Grabs the Routes
import routes from './config/react-routes.jsx';

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));

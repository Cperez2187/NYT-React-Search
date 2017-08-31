// Inclue the React library
import React from 'react';

// Include the react-router module
import router from 'react-router';

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
const hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from '../components/Main.jsx';
import Search from '../components/children/Search.jsx';
import Saved from '../components/children/Saved.jsx';
import Query from '../components/children/Query.jsx';
import Results from '../components/children/Results.jsx';

TODO:
// Refactor this 

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Child1" component={Child1} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="GrandChild1" component={GrandChild1} />
        <Route path="GrandChild2" component={GrandChild2} />

        <IndexRoute component={GrandChild1} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Child2" component={Child2} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Child1} />

    </Route>
  </Router>
);

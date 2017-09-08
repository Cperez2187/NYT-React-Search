import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Import child components
import Search from './children/Search.jsx';
import Results from './children/Results.jsx';
import Saved from './children/Saved.jsx';

// Import helper for making AJAX request to our API
import helper from './utils/helper.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
              topic: '',
          startYear: '',
            endYear: '',
            results: [],
      savedArticles: []
    };

    // Bind methods specific to this component
    this.changeState = this.changeState.bind(this);
  }
  
  componentDidMount() {

  }

  /**
   * If the component state changes (i.e if a search is entered)...
   */
  componentDidUpdate(prevProps, prevState) {

    // Copy the 3 values we need from the state object
    const { topic, startYear, endYear } = this.state;

    // If any of the parameters have changed since the last search...
    if (topic !== prevState.topic || startYear !== prevState.startYear || endYear !== prevState.endYear) {
      // Create an object with the search parameters needed for the query
      const searchParams = { topic, startYear, endYear };
      // Run query to search for articles
      helper.runQuery(searchParams).then(results => {
        console.log('Results: ', results);
        // Set 'state' results equal to results returned from query
        this.setState({ results });
      });
    }
    
  }
  
  /**
   * This method allows child components to update the 
   * 'topic' state on this component
   */
  changeState(searchState) {
    console.log(searchState);
    const { topic, startYear, endYear } = searchState;

    this.setState({ 
      topic,
      startYear,
      endYear
    });

  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>
            <strong>
              <i className="fa fa-newspaper-o"></i> 
              {" New York Times Search"}
            </strong>
          </h1>
          <p>Search for and annotate articles of interest!</p>
        </div> 

        {/* -- Search Section -- */} 
        <div className="row">
          <div className="col-sm-12">
            {/** 
              * Render 'Search' component and pass
              * 'changeState' method as a prop
              */
            }
            <Route render={() => <Search changeState = {this.changeState} />} />
          </div> 
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Route path="/results" component={() => <Results results={this.state.results} />} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Route render={() => <Saved savedArticles={this.state.savedArticles} />} />
          </div>
        </div>
      </div> 
    );
  }
}

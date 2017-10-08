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
    this.setParameters = this.setParameters.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.setSavedArticles = this.setSavedArticles.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }
  
  // When component mounts...
  componentDidMount() {
    // Get and display saved articles from database
    this.getArticlesFromDB();
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
        this.setResults(results);
      });
    }
    
  }
  
  /**
   * This method allows child components to update the 
   * 'topic' state on this component
   */
  setParameters(searchState) {
    console.log(searchState);
    const { topic, startYear, endYear } = searchState;

    this.setState({ 
      topic,
      startYear,
      endYear
    });

  }

  setResults(results) {
    this.setState({ results });
  }

  // Saves article passed in from 'Results' component
  saveArticle(article) {
    // Save article to database
    helper.postArticle(article);
    // Get saved articles from database
    this.getArticlesFromDB();
  }

  // Deletes article passed in from 'Saved' component
  deleteArticle(article) {
    helper.deleteArticle(article).then(deletedArticle => {
      console.log('Article deleted: ', deletedArticle);
    });
    // Get new list from database after deletion
    this.getArticlesFromDB();
  }
  // Retrieves articles from database
  getArticlesFromDB() {
    helper.getSavedArticles().then(savedList => {
      console.log('Saved: ', savedList);

      // Update state
      this.setSavedArticles(savedList);
    });
    
  }

  // This method changes the 'saved' state
  setSavedArticles(savedArticles) {
    this.setState({ savedArticles });
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
          <p>Search for and save articles of interest!</p>
        </div> 

        {/* -- Search Section -- */} 
        <div className="row">
          <div className="col-sm-12">
            {/** 
              * Render 'Search' component and pass
              * 'setParameters' method as a prop
              */
            }
            <Route render={() => <Search setParameters = {this.setParameters} />} />
          </div> 
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Route path="/results" component={() => <Results 
              results={this.state.results}
              saveArticle={this.saveArticle} 
            />} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Route component={() => <Saved 
              savedArticles={this.state.savedArticles}
              deleteArticle={this.deleteArticle} 
            />} />
          </div>
        </div>
      </div> 
    );
  }
}

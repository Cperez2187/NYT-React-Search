import React, { Component } from 'react';

class Saved extends Component {
  constructor(props) {
    super(props);
    // Set state to equal results prop passed in from 'Main' component
    this.state = { savedArticles: props.savedArticles };


  }

  displaySavedArticles() {
    const savedArticles = this.state.savedArticles;
    // Check if there are no savedArticles...
    if (savedArticles.length === 0) {
      return (
        <div className="well">
          <h3>
            <strong>No Articles Saved</strong>
          </h3>
        </div>
      );
    }

    // Otherwise return results to display
    // const savedList = savedArticles.map()

  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>
              <i className="fa fa-table"></i>
              {" Saved Articles"}
            </strong>
          </h3>
        </div>
        <div className="panel-body saved-body">
          {this.displaySavedArticles()}
        </div>      
      </div>
    );
  }
  
}

export default Saved;
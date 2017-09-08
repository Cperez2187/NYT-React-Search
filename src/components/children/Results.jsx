import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    // Set state
    this.state = { results: props.results };
  }

  displayResults() {
    const results = this.props.results;
    const formattedResults = results.map((article, index) => {

      const { _id, headline, pub_date, web_url } = article;
      return (
        <div className="well" key={_id}>
        <h3>
          <span className="label label-primary">{index+1}</span>
          <strong> {headline.main}</strong>
        </h3>
        <h5>Publication Date: {pub_date}</h5>
        <a href={web_url} target="_blank">Link To Article</a>
        <div>
          <button className="btn btn-info" type="button">Save</button>
        </div>
        
        </div>
      );
    });
    return formattedResults;
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>
              <i className="fa fa-table"></i>
              {" Top Articles"}
            </strong>
          </h3>
        </div>
        <div className="panel-body results-body">
          {this.displayResults()}
        </div>
      </div>
    );
  }
 
};

export default Results;
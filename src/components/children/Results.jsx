import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    // Set state
    this.state = { results: props.results };
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
        <div className="panel-body">
          <div className="well">
            <h3>
              <span className="label label-primary">1</span>
              <strong> Article One</strong>
            </h3>
          </div>
          <div className="well">
            <h3>
              <span className="label label-primary">2</span>
              <strong> Article Two</strong>
            </h3>
          </div>
          <div className="well">
            <h3>
              <span className="label label-primary">3</span>
              <strong> Article Three</strong>
            </h3>
          </div>
        </div>
      </div>
    );
  }
 
};

export default Results;
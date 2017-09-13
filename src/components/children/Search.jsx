import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {  
          topic: '',
      startYear: '',
        endYear: ''
    };

    // Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  // This function will respond to the user input
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.id]: target.value
    });

  }

  // When a user submits...
  handlesubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    console.log('inside');
    // Copy the state object
    const stateCopy = Object.assign({}, this.state);
    // Update the state on the 'Main' component
    this.props.setParameters(stateCopy);
    //push the new route ('/results') into the history stack in order to render 'Results component
    this.props.history.push('/results');

    // Reset the state for 'Search'
    this.setState({
      topic: '',
      startYear: '',
      endYear: ''
    });
  }
  
  render() {
    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>
              <i className="fa  fa-list-alt"></i>
              {" Search Parameters"}
            </strong>
          </h3>
        </div>
        <div className="panel-body search-body">
          <form role="form" onSubmit={this.handlesubmit}>
            <div className="form-group">
              <label htmlFor="topic">Topic:</label>
              <input 
                value={this.state.topic} 
                type="text" className="form-control" 
                id="topic"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startYear">Start Year:</label>
              <input 
                value={this.state.startYear}
                type="text" 
                className="form-control" 
                id="startYear"
                onChange={this.handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="endYear">End Year:</label>
              <input
                value={this.state.endYear} 
                type="text" 
                className="form-control" 
                id="endYear"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-sm-12 text-center"> 
              <button className="btn btn-primary" type="submit">
                Search
              </button>    
            </div>  
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
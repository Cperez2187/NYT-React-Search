import React, { Component } from 'react';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { 
           searchTerm: '',
      numberOfRecords: '',
            startYear: '',
              endYear: '',
              results: []
    };

    // Bind methods specific to this component
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }
  
  componentDidMount() {

  }

  /**
   * If the component state changes (i.e if a search is entered)...
   */
  componentDidUpdate() {
   
  }
  /**
   * This method allows child components to update the 
   * 'searchTerm' state on this component
   */
  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }
  render() {
    return (
      {/* Write code here */}
    );
  }
}

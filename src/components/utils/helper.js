// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios';

// Helper functions for making API Calls
const helper = {

  // This function serves our purpose of running the query to NY Times.
  runQuery(location) {

    console.log(location);

    // Figure out the geolocation
    const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL).then((response) => {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory(article) {
    return axios.post("/api", { article });
  }
};

// We export the API helper
export default helper;

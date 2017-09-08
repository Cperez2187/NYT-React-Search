// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios';

// Function to create NY Times queryURL
const createNYTQuery = (searchParams) => {
  const { topic, startYear, endYear } = searchParams;
  const api_key = '078da0963e154de88d897759e3bc8b29';
  // Only select fields needed
  const fields = 'web_url,headline,pub_date,_id';

  // Build query URL
  let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}&q=${topic}`;
  queryURL += `&begin_date=${startYear+'0101'}&end_date=${endYear+'0101'}`;
  queryURL += `&fl=${fields}`;

  return queryURL;
}


// Helper functions for making API Calls
const helper = {

  // This function serves our purpose of running the query to NY Times.
  runQuery(searchParams) {
    console.log(searchParams);
    // Get query URL using function
    let queryURL = createNYTQuery(searchParams);

    // Make API call 
    return axios.get(queryURL).then(NYTData => {
      console.log("NYTData", NYTData);
      const results = NYTData.data.response.docs;
      // If we don't get a result...
      if (results.length === 0) {
        console.log('No Results')
        return 'No Results';
      }
      
      // Otherwise return the results
      return results;
    });
  },

  // This function hits our own server to retrieve saved articles
  getSavedArticles() {
    return axios.get("/api");
  },

  // This function posts new articles to our database.
  postArticles(article) {
    return axios.post("/api", { article });
  }
};

// We export the API helper
export default helper;

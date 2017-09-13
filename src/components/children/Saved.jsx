/**
 |--------------------------------------------------
 | Stateless Saved Component
 |--------------------------------------------------
 */
import React from 'react';


const Saved = (props) => {

  const savedArticles = props.savedArticles;

  // When delete button is clicked...
  const handleDeleteClick = (event) => {
    console.log('Inside delete click: ', event.target);
    // Get index of article that will be deleted
    const index = parseInt(event.target.value.trim());
    const articleToDelete = savedArticles[index];

    console.log('Article to delete: ', articleToDelete);

    // Delete article from database
    props.deleteArticle(articleToDelete);
  }

  // Formats the articles from database, if any
  const displaySavedArticles = () => {
  
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

    // Otherwise format the and return results to display
    return savedArticles.map((article, index) => {
      // Separate parameters needed from each article
      const { _id, title, date, url } = article;
      // Create JSX needed to display each article
      return (
        <div className="well" key={_id}>
          <h3>
            <span className="label label-primary">{index+1}</span>
            <strong> {title}</strong>
          </h3>
          <h5>Publication Date: {date}</h5>
          <a href={url} target="_blank">Link To Article</a>
          <div>
            <button 
              className="btn btn-info" 
              type="button"
              value={index}
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };


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
        {displaySavedArticles()}
      </div>      
    </div>
  );
  
}

export default Saved;
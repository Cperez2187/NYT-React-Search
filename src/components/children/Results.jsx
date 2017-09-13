/**
|--------------------------------------------------
| Stateless Results Component
|--------------------------------------------------
*/
import React from 'react';

const Results = (props) => {

  // When saved button is clicked...
  const handleSaveClick = (event) => {
    console.log('Inside click: ', event.target);
    // Get index of article in results array
    const index = parseInt(event.target.value.trim());
    // Create object object with required article info to save
    const { headline, pub_date, web_url } = props.results[index];
    const articleToSave = {
      title: headline.main,
      date: pub_date,
      url: web_url
    };
    console.log('Article to save: ', articleToSave);
    // Save article
    props.saveArticle(articleToSave);

  };
  // Format the results to display correctly
  const results = props.results;
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
          <button 
            className="btn btn-info" 
            type="button"
            value={index}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    );
  });

 

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
        {formattedResults}
      </div>
    </div>
  );
 
};

export default Results;
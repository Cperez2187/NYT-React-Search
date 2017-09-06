/**
|--------------------------------------------------
| Shared Panel layout component. 
| Shared by all child components.
|--------------------------------------------------
*/

import React from 'react';

const PanelLayout = () => {
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

      </div>
    </div>
  );
}

export default PanelLayout;
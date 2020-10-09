import React from "react";

//Custom components
import * as endpoints from "../config/endpoints";

class Latest extends React.Component {

  render() {
    const dateParam = this.props.match.params.date;
  
    return (
            
      <div>
          <h3>
              Útimo momento {dateParam}
          </h3>
          
          <label>
              {`Seleccione la fecha   `}
              <input type="date"/>
              <div>
                URL => {`${endpoints.BASE_URL}${endpoints.ENDPOINT_LATEST}`}
              </div>
          </label>
          
      </div>
    );
  }
};

export default Latest;

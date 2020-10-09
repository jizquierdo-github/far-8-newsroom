import React from "react";

//Custom components
import * as endpoints from "../config/endpoints";

const Trending = (props) => {

  const dateParam = props.match.params.date;

  return (
          
    <div>
        <h3>
            Tendencias {dateParam}
        </h3>

        <label>
            {`Seleccione la fecha   `}
            <input type="date"/>
        </label>
        <div>
              URL => {`${endpoints.BASE_URL}${endpoints.ENDPOINT_TRENDING}`}
        </div>
    </div>
  );
};

export default Trending;

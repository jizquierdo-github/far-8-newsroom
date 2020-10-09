import React from "react";

//Custom components
export const SEARCH = "fa fa-search";
export const MAP_MARKER = "fas fa-map-marker-alt";
export const BED = "fas fa-bed";
export const DOLLAR_SIGN = "fas fa-dollar-sign";
export const CALENDAR_CHECK = "far fa-calendar-check";
export const CALENDAR_TIMES = "far fa-calendar-times";

class CustomIcon extends React.Component {

  render() {
    const {type,size,color,backgroundColor} = this.props;
  
    return (
      <i
        className={type}
        style={{
          fontSize: size,
          color: color,
          background: backgroundColor,
          padding: "5px"
        }}
      />
    );
  }
};

export default CustomIcon;
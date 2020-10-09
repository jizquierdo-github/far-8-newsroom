import React from "react";

//Custom components
export const SEARCH = "fa fa-search";
export const MAP_MARKER = "fas fa-map-marker-alt";
export const BED = "fas fa-bed";
export const DOLLAR_SIGN = "fas fa-dollar-sign";
export const CALENDAR_CHECK = "far fa-calendar-check";
export const CALENDAR_TIMES = "far fa-calendar-times";

export const CustomIcon = (props) => {
  let type = props.type;

  return (
    <i
      className={type}
      style={{
        fontSize: props.size,
        color: props.color,
        background: props.backgroundColor,
        padding: "5px"
      }}
    />
  );
};

export default CustomIcon;
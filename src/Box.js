import React from "react";


function Box({ backgroundColor, width, height }) {
  const myStyles = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  };

  return (<div style={myStyles}></div>);
}

export default Box;
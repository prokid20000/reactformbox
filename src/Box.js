import React from "react";

function Box({ id, width, height, backgroundColor, handleRemove }) {

  return (
    <div className="Box">
      <div style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
      }}
      />
      <button className="BoxRemove" onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );

}

export default Box;
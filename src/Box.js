import React from "react";

function Box({ width, height, backgroundColor, remove }) {
  function handleRemove(evt) {
    remove(evt.target.id);
  }

  return (
    <div className="Box">
      <div className="Box-box" style={{
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
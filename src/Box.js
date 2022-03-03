import React from "react";

/** Box.
 *
 * Properties:
 *
 * - id: unique id of each box
 * - width: width of box
 * - height: height of box
 * - backgroundColor: color of the box
 * - remove: function to remove box
 *
 * BoxList -> Box
 *
 **/



function Box({ id, width, height, backgroundColor, remove }) {

    // remove a box
    function handleRemove() {
        remove(id);
    }
    
    return (
        <div className="Box">
            <div className="Box-box" style={{
                height: `${height}px`,
                width: `${width}px`,
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
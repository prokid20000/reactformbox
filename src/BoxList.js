import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';


function BoxList() {
  // set state
  const [boxes, setBoxes] = useState([]);


  // function handleRemove
  function handleRemove(evt) {
    const target = evt.target;

    setBoxes(boxes => boxes.filter(box => box.id != target.id));
  }

  // function addBox
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }


  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {
        boxes.map(box => <Box id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          handleRemove={handleRemove} />)
      }
    </div>

  );

}

export default BoxList;
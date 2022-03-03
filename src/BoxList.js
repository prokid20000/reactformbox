import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';


function BoxList() {
  // set state
  const [boxes, setBoxes] = useState([]);


  // function remove
  function remove(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
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
        boxes.map(box => <Box key={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          remove={remove} />)
      }
    </div>

  );

}

export default BoxList;
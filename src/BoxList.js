import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** List of boxes.
 *
 * Properties:
 *
 * - None
 *
 * State:
 *
 * - boxes: array of box objects
 * 
 * [{ id: 356b2810-175b-4bc5-a570-0887398ea321, 
 *    height: 100px, 
 *    width: 100px, 
 *    backgroundColor: black}, ....]
 * 
 * BoxList -> Box
 *          ->NewBoxForm
 **/
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

  // make list of boxes
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {
        boxes.map(box => <Box key = {box.id} 
            id ={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          remove={remove} />)
      }
    </div>

  );

}

export default BoxList;
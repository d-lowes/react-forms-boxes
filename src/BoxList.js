import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';
import Box from "./Box";

/**
 * Place your state that contains all of the boxes here. This component should
 * render all of the Box components along with the NewBoxForm component.
 * [{ backgroundColor, width, height }]
*/

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <div>
        {boxes.map(box => (
          <div key={box.id}>
          <Box backgroundColor={box.backgroundColor}
               width={box.width}
               height={box.height}
               key={box.id} />
          <button id={box.id} onClick={handleRemoveBox}>X</button>
          </div>
        ))}
      </div>
    )
  }

  function addBox(box) {
    let newBox = {...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function handleRemoveBox(evt) {
    let boxId = evt.target.id;
    setBoxes(boxes => boxes.filter(box => box.id !== boxId))
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;
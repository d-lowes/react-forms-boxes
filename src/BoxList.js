import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

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
          <div key={box.id}>{box}</div>
        ))}
      </div>
    )
  }

  function addBox(box) {
    let newBox = {...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
}
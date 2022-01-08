import React, { useState } from "react";

function ToDoItem(props) {
  const [isCrossed, setIsCrossed] = useState(false);
  const lineTrough = { textDecoration: "line-through" };
  function setStyle() {
    setIsCrossed((preValue) => !preValue);
  }
  return (
    <div className="item-area">
      <div
        className="item"
        style={isCrossed ? lineTrough : null}
        onClick={setStyle}
      >
        {props.item}
      </div>
      <button
        onClick={() => {
          props.click(props.id);
        }}
      >
        x
      </button>
      <button>Edit</button>
    </div>
  );
}

export default ToDoItem;

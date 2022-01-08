import React, { useState } from "react";

function ToDoItem(props) {
  // const [isCrossed, setIsCrossed] = useState(false);
  // const lineTrough = { textDecoration: "line-through" };
  // function setStyle() {
  //   setIsCrossed((preValue) => !preValue);
  // }
  return (
    <div className="item-area">
      <input
        className="item"
        value={props.item}
        // style={isCrossed ? lineTrough : null}
        // onClick={setStyle}
      ></input>
      <button
        onClick={() => {
          props.click(props.id);
        }}
      >
        x
      </button>
    </div>
  );
}

export default ToDoItem;

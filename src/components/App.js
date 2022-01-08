import React, { useState } from "react";

import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }
  const [lists, setLists] = useState([]);
  function handleClick(event) {
    setLists(function (pervalue) {
      if (inputText.length === 0) {
        return pervalue;
      } else {
        return [...pervalue, inputText];
      }
    });
    setInputText("");
    event.preventDefault();
  }

  function deleteItem(id) {
    setLists((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={handleClick} className="input-area">
        <input
          type="text"
          placeholder="add a to do thing"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={handleClick}>add</button>
      </form>
      <div>
        {lists.map((todothing, index) => (
          <ToDoItem
            item={todothing}
            key={index}
            id={index}
            click={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

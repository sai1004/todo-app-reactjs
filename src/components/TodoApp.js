import { useEffect, useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const addToList = (e) => {
    e.preventDefault();
    if (todoItem) {
      setTodoList((oldTodoList) => {
        return [...oldTodoList, todoItem];
      });
    }
    setTodoItem("");
    console.log("todoList", todoItem);
  };

  const removeItem = (index) => {};

  return (
    <div>
      <form onSubmit={addToList}>
        <input
          className="add_input"
          type="text"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
          required
        />
        <button type="submit" className="add__btn">
          Add To List
        </button>
      </form>

      <div>
        {todoList.map((item, i) => {
          return (
            <div key={i}>
              <h4> {item} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;

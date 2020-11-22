import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Your Todo App </h1>
      </div>
      <div className="todolist__layout">
        <div className="layout__title">
          <h3> Your Todo List</h3>
        </div>
        <div className="layout__body">
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default App;

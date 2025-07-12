
import './App.css';
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onToDoInputChange = (event) => {
    setTodo(event.target.value);
  }

  const onAddToDoList = () => {
    setTodoList([...todoList, {id : uuid(), task: todo, isCompleted: false}]);
    setTodo("");
    console.log(todoList);
  }

  const onDeleteClick = (id) => {
    const updatedList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedList);
  }

  const onCheckboxChange = (id) => {
    const updatedList = todoList.map(todo => todo.id === id ? {...todo, isCompleted : !todo.isCompleted} : todo);
    setTodoList(updatedList);
    console.log(updatedList);
  }

  return (
    <div className="App">
      <h1>YOUR TO-DO-LIST</h1>
      <div className = "form-task">
        <input className = "task-input" value = {todo} onChange = {onToDoInputChange} placeholder = "Add your task here..."/>
        <button className = "add-btn" onClick = {onAddToDoList}>ADD</button>
      </div>
      <div>
        {
          todoList.length > 0 && todoList.map(todo => (
            <div key = {todo.id} className = "to-do-list">
              <label>
                <input className = "check-box" type = "checkbox" onChange = {() => onCheckboxChange(todo.id)} />
                <span className = {todo.isCompleted ? 'strike' : ''}>{todo.task}</span>
              </label>
              <button className = "del-icon" onClick = {() => onDeleteClick(todo.id)}><FontAwesomeIcon icon = {faTrash}/></button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

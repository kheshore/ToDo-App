import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import AddToDo from "./AddToDo"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: true,
      todo: "Learn React",
    },
    {
      id: 2,
      checked: false,
      todo: "Master React",
    },
  ]);
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    setnewItem(newItem)
  }
  const handleToggle = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, checked:!todo.checked} : todo))
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const count = todos.length;
  return (
    <div className="App">
      <Header 
      //title = "List" for props (child to parent)
      />
      <AddToDo
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      
      <Content 
      todos = {todos}
      handleToggle = {handleToggle}
      handleDelete = {handleDelete}
      />
      <Footer 
      count = {count}
      />  
    </div>
  );
}

export default App;
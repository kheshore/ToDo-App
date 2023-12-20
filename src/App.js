import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import AddToDo from "./AddToDo"
import Searcher from './Searcher';

// Main App Function
function App() {

  // state to store todos in local storage
  // todos is an array
  // setTodos is a function to store todos
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  // state to store new todo
  // newTodo is a string because it is an input
  // setNewTodo is a function to store new todo
  const [newTodo, setNewTodo] = useState('')

  // state to store search
  const [search, setSearch] = useState('')
   
  // addTodo is a function to add new todo
  // addNewTodo is an object
  // newTodo is a string with the value of old todos and new todo
  // ...todos is an array of old todos
  // ... is used to spread the old todos and add new todo with it
  // todo is an object from the input
  const addTodo = (todo) => {
    //for unique ID
    const id = todos.length  ? todos[todos.length -1].id + 1 : 1 ;
    //create new item
    const addNewTodo = {
      id,checked:false,todo 
    }
    // creates new array and stores the new todo along with the old todos
    const newTodo = [...todos, addNewTodo]
    setTodos(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo))
  }

  // addTodo is a function (above)
  // e.preventDefault() is used to prevent the form from submitting (reloading)
  // setNewTodo is a function to make the input empty
  // newTodo is a string passed from the input to addTodo as a parameter
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo)
    setNewTodo('')
  }

  // handleToggle is a function to change the checked value (tick box)
  // id is a parameter passed from the Content component
  // setTodos is a function to store todos after alteration
  // .map is used to loop through the todos
  const handleToggle = (id) => {
    const listTodos = todos.map((todo) => todo.id === id ? {...todo, checked:!todo.checked} : todo)
    setTodos(listTodos)
    localStorage.setItem('todos', JSON.stringify(listTodos))
  }

  // handleDelete is a function to delete the todo
  // id is a parameter passed from the Content component
  // .filter is used to filter out the todos that are not equal to the id
  // setTodos is a function to store todos after deletion
  const handleDelete = (id) => {
    const listTodos = todos.filter((todo) => todo.id !== id)
    setTodos(listTodos)
    localStorage.setItem('todos', JSON.stringify(listTodos))
  }

  // count is the number of todos
  const count = todos.length;
  
  // return statement for App
  return (
    <div className="App">
      <Header 
      //title = "List" for props (child to parent)
      />
      <AddToDo
      newTodo = {newTodo}
      setNewTodo = {setNewTodo}
      handleSubmit = {handleSubmit}
      />
      <Searcher 
      search = {search}
      setSearch = {setSearch}
      />
      <Content 
      // todos is the list of todos
      // filter is used to filter out the todos that are not equal to the search
      // todo.todo is the value of the todo in todos
      todos = {todos.filter((todo) => (todo.todo).toLowerCase().includes(search.toLowerCase()))}
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
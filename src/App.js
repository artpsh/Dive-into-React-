import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import {Container} from "react-bootstrap";


function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'firstTodo',
            status: true
        },
        {
            id: 2,
            title: 'secondTodo',
            status: true
        },
        {
            id: 3,
            title: 'thirdTodo',
            status: false
        }
    ])
    return (
        <Container>
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </Container>
    );
}

export default App;

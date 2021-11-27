import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import {Col, Row, Button, FormControl} from "react-bootstrap";
import styles from "./AddTodo.module.css"

function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState("")
    console.log(value)

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue("")
    }

    return (
        <Row>
            <Col className={styles.addTodoForm}>
                <FormControl placeholder="Enter your task" value={value}
                             onChange={(event) => setValue(event.target.value)}/>
                <Button className={styles.btn} onClick={saveTodo}>SAVE</Button>
            </Col>
        </Row>
    )
}

export default AddTodo
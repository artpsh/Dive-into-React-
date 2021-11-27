import React, {useState} from "react";
import {Button, FormControl} from "react-bootstrap";
import styles from "./TodoList.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faMinus, faLockOpen, faLock} from '@fortawesome/free-solid-svg-icons'

function TodoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState("")

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map(item =>
                    <div key={item.id} className={styles.listItems}>
                        {
                            edit === item.id ?
                                <div>
                                    <FormControl value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> :
                                <div className={!item.status ? styles.close : ""}>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <Button variant="success" onClick={() => saveTodo(item.id)}>SAVE CHANGES</Button> :
                                <div>
                                    <Button variant="danger" onClick={() => deleteTodo(item.id)}
                                            size="lg"><FontAwesomeIcon icon={faMinus}/></Button>
                                    <Button className={styles.btn} variant="warning"
                                            onClick={() => editTodo(item.id, item.title)} size="lg"><FontAwesomeIcon
                                        icon={faEdit}/></Button>
                                    <Button className={styles.btn} variant="secondary"
                                            onClick={() => statusTodo(item.id)} size="lg">
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLock}/> :
                                                <FontAwesomeIcon icon={faLockOpen}/>
                                        }
                                    </Button>
                                </div>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TodoList
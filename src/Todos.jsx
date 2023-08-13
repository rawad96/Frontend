import axios from 'axios'
import React, { useState, useEffect } from 'react'



export const Todos = ({ userrr, todos, completetask, newtodos }) => {

    const [addtodo, setaddtodo] = useState(false) //show or hide (add new todo div)

    const [newtodotitle, setnewtodotitle] = useState("")

    const [alltodos, setalltodos] = useState(todos)


    // send new todo data to the child comp to add it to all todos
    const sendnewtodo = (e) => {
        e.preventDefault()
        const obj = { userId: userrr.id, id: alltodos.length + 1, title: newtodotitle, completed: false }
        newtodos(obj)
        setaddtodo(false)
        setnewtodotitle("")

    }


    // cancel the add todo form
    const cancelform = () => {
        setaddtodo(false)
        setnewtodotitle("")
    }

    return (
        <>

            <span style={{ display: addtodo ? "none" : "inline", fontSize: "14px" }}>Todos-User {userrr.id}</span>
            <span style={{ display: addtodo ? "inline" : "none", fontSize: "14px" }}>New todo-User {userrr.id}</span>
            <button style={{ borderRadius: "0", border: "1px solid black", backgroundColor: "orange", fontSize: "10px", marginLeft: "58%", marginBottom: "1%", width: "55px", display: addtodo ? "none" : "inline" }} onClick={e => setaddtodo(true)}>Add</button>
            <div style={{ border: "2px solid black", overflow: "auto", height: "200px", width: "350px", display: addtodo ? "none" : "block" }}>
                {
                    todos.map((todo, index) => {
                        return <div key={index} style={{ border: "1px solid black", marginTop: "13px", width: "300px", marginLeft: "auto", marginRight: "auto" }} >
                            <strong>Title: </strong><span>{todo.title}</span> <br />
                            <strong>Completed: </strong><span id='completed'>{todo.completed ? "true" : "false"}</span>
                            {
                                !todo.completed && <button style={{ backgroundColor: 'orange', fontSize: "12px", borderRadius: "0", marginLeft: "50px", border: "1px solid", marginBottom: "5px" }} onClick={e => completetask(todo.id)}>Mark Completed</button>
                            }

                        </div>
                    })
                }

            </div>
            <div style={{ border: "2px solid black", overflow: "auto", height: "200px", width: "350px", display: addtodo ? "block" : "none" }}>
                <form onSubmit={sendnewtodo}>
                    <strong style={{ marginTop: "25%", display: "inline-block", marginLeft: "18%" }}>Title:</strong><input type="text" value={newtodotitle} onInput={e => setnewtodotitle(e.target.value)} required />
                    <button type="button" style={{ backgroundColor: "orange", border: "1px solid black", borderRadius: "0", marginTop: "15%", marginLeft: "60%", fontSize: "12px" }} onClick={cancelform}>cancel</button>
                    <button type="submit" style={{ backgroundColor: "orange", border: "1px solid black", borderRadius: "0", fontSize: "12px", marginLeft: "2%", width: "60px" }} >add</button>
                </form>
            </div>
        </>

    )
}

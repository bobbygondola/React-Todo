// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

const ToDoList = props => {
    return (
        <div className = "toDoList">
            {props.toDo.map(item => (
                <p>{item.task} </p>
            ))}
            <button className="clearBtn">Clear</button>
        </div>
    )
}
export default ToDoList;
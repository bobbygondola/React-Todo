// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const ToDoList = props => {
    return (
        <div className = "toDoList">
            {props.toDo.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button className="clearBtn">Clear</button>
        </div>
    )
}
export default ToDoList;
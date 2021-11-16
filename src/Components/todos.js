import React from "react";

const ToDos = ({todos}) => {

    const todoList = () => todos.length > 0 ? 
    
        (
            todos.map((todo) => {
                return (
                    <div className='collection-item' key={todo.id}>
                        <li> {todo.content} </li>
                    </div>
                ) 
            })
        )
        :
        <div>You have no to-do's waiting on you.</div>


    return (
        <div className = 'todos collection'>
            {todoList()}
        </div>
    )
}

export default ToDos
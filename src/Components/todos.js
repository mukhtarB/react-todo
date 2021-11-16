import React from "react";

const ToDos = ({todos, delTodo}) => {

    // const todoList = () => todos.length > 0 ? 
    const todoList = todos.length > 0 ? 
    
        (
            todos.map((todo) => {
                return (
                    <li
                        onClick = {() => {delTodo(todo.id)}} 
                        className='collection-item' key={todo.id}
                    >
                        {todo.content}
                    </li>
                ) 
            })
        )
        :
        <div className='center collection-item' >You have no to-do's waiting on you.</div>


    return (
        <ul className = 'todos collection'>
            {/* {todoList()} */}
            {todoList}
        </ul>
    )
}

export default ToDos
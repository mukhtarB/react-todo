import React from "react";

const ToDos = ({todos, delTodo}) => {

    // const todoList = () => todos.length > 0 ? 
    const todoList = todos.length > 0 ? 
    
        (
            todos.map((todo) => {
                return (
                    <div className='collection-item' key={todo.id}>
                        <li onClick = {() => {delTodo(todo.id)}}> {todo.content} </li>
                    </div>
                ) 
            })
        )
        :
        <div className='center collection-item' >You have no to-do's waiting on you.</div>


    return (
        <div className = 'todos collection'>
            {/* {todoList()} */}
            {todoList}
        </div>
    )
}

export default ToDos
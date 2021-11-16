import React, { Component } from "react";

// Components
import ToDos from "./Components/todos";
import InputField from "./Components/todoInput";

class App extends Component {

    state = {
        todos: [
            {id: 1, content: 'Buy some milk.'},
            {id: 2, content: 'Play some mario kart.'},
        ]
    }

    delTodo = (id) => {
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id
        })

        this.setState({
            todos
        })
    }

    render(){
        return (
            <div className='todo-app container'>
                <h3 className = 'center blue-text'> To Do's: </h3>
                <ToDos todos={this.state.todos} delTodo={this.delTodo} />
                <InputField />
            </div>
        )
    }
}

export default App;

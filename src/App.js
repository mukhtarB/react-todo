import React, { Component } from "react";

// Components
import ToDos from "./Components/todos";

class App extends Component {

    state = {
        todos: [
            {id: 1, content: 'Buy some milk.'},
            {id: 2, content: 'Play some mario kart.'},
        ]
    }

    render(){
        return (
            <div className='App'>
                <h3 className = 'center blue-text'> To Do's: </h3>
                <ToDos todos={this.state.todos} />
            </div>
        )
    }
}

export default App;

import React, { Component } from "react";

class InputField extends Component {

    state = {
        formContent: ''
    }

    changeHandler = (e) => {
        this.setState({
            formContent: e.target.value
        })
    }

    render (){
        return (
            <div>
                <form>
                    <label>Add new To Do?</label>
                    <input type = "text" onChange={this.changeHandler} />
                    {console.log(this.state)}
                </form>
            </div>
        )
    }
}

export default InputField;
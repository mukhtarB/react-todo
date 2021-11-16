import React, { Component } from "react";

class InputField extends Component {
    render (){
        return (
            <div>
                <form>
                    <label>Add new To Do?</label>
                    <input type = "text" />
                </form>
            </div>
        )
    }
}

export default InputField;
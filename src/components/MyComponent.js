import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'kayti',
        age: 22
    };
    handleClick = (event) => {
        console.log("My name is ", this.state.name)
        this.setState({
            name: 'khanhtrinhngo',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnchangeInput = (event) => {
        // console.log(event, event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and {this.state.age}!
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        onChange={(event) => { this.handleOnchangeInput(event) }}
                        type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;
import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'kayti',
        age: 22
    };
    handleOnchangeInput = (event) => {
        // console.log(event, event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge = (event) => {
        // console.log(event, event.target.value)
        this.setState({
            age: event.target.value
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
                    <label>Your Name: </label>
                    <input
                        value={this.state.name}
                        onChange={(event) => { this.handleOnchangeInput(event) }}
                        type="text" />
                    <label>Your Age: </label>
                    <input
                        value={this.state.age}
                        onChange={(event) => { this.handleOnchangeAge(event) }}
                        type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;
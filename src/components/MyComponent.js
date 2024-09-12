import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'kayti',
        age: 22
    };
    handleClick = (event) => {
        // console.log('>>>Click me')
        console.log("My name is ", this.state.name)
        this.setState({
            name: 'khanhtrinhngo',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    // handleClick(event) {
    //     console.log("My name is ", this.state.name)
    // }

    handleOnMoverOver(event) {
        console.log(event)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and {this.state.age}!
                <button onMouseOver={this.handleOnMoverOver}>Hover me!</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me!</button>
            </div>
        )
    }
}

export default MyComponent;
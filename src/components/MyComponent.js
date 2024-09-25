import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'a', age: 20 },
            { id: 2, name: 'b', age: 20 },
            { id: 3, name: 'c', age: 20 }
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <hr />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;
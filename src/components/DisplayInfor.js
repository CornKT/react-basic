import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            my name is {user.name}
                            <br />
                            my age is {user.age}
                            <hr />
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;
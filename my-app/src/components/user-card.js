import React from "react";

class UserCardClass extends React.Component {
    render() {
        return (
            <p className="user-card">
                Name: {this.props.name} <br />
                Age: {this.props.age}
            </p>
        );
    }
}

function UserCard(props) {
    return (
        <p className="user-card">
            Name: {props.name} <br />
            Age: {props.age}
        </p>
    );
}

export default UserCard;

import React from "react";

class AddCardForm extends React.Component {
    state = {
        nameInput: "",
        ageInput: "",
        users: []
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.nameInput}
                        onChange={this.handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={this.state.ageInput}
                        onChange={this.handleAgeChange}
                    />
                    <input type="submit" value="Add user" />
                </form>

                {this.state.users.map(user => {
                    console.log(user);
                    const el = React.cloneElement(user, {
                        name: this.state.nameInput,
                        age: this.state.ageInput
                    });
                    return el;
                })}
            </React.Fragment>
        );
    }

    handleNameChange = e => {
        this.setState({ nameInput: e.target.value });
    };
    handleAgeChange = e => {
        this.setState({ ageInput: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const element = this.props.addUser(
            this.state.nameInput,
            this.state.ageInput
        );
        this.setState(prevstate => {
            prevstate.users.push(element);
            return {
                users: prevstate.users
            };
        });
    };
}

export default AddCardForm;

import React, { useState } from "react";

class ToggleButtonClass extends React.Component {
    state = {
        open: true
    };
    render() {
        return (
            <p className="mb-0">
                <button
                    className="btn btn-primary mr-2"
                    type="button"
                    onClick={this.toggleButton}
                >
                    Toggle
                </button>
                {this.toStr(this.state.open)}
            </p>
        );
    }
    toStr = btnOpen => (btnOpen ? "Open" : "Closed");
    toggleButton = btn =>
        this.setState(prevState => ({ open: !prevState.open }));
}

function ToggleButton() {
    const [toggleButton, setToggleButton] = useState(false);
    return (
        <p className="mb-0">
            <button
                className="btn btn-primary mr-2"
                type="button"
                onClick={() => setToggleButton(!toggleButton)}
            >
                Toggle
            </button>
            {toggleButton ? "Open" : "Closed"}
        </p>
    );
}

export default ToggleButton;

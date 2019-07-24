import React from "react";
import PropTypes from "prop-types";

class PageSlider extends React.Component {
    render() {
        return (
            <button
                className="btn btn-secondary"
                type="button"
                onClick={this.props.next}
            >
                {this.props.char}
            </button>
        );
    }
}

PageSlider.propTypes = {
    next: PropTypes.func
};

export default PageSlider;

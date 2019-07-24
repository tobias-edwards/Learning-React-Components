import React from "react";
import PropTypes from "prop-types";

const images = [1, 2, 3, 4, 5];

class ImageViewer extends React.Component {
    render() {
        return <p className="display-1">{this.props.num}</p>;
    }
}

ImageViewer.propTypes = {
    num: PropTypes.number
};

export default ImageViewer;

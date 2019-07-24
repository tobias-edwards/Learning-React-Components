import React, { useState } from "react";
import PageSlider from "./page-slider";
import ImageViewer from "./image-viewer";

class Gallery extends React.Component {
    state = {
        picNum: 0
    };
    mod(n, m) {
        return ((n % m) + m) % m;
    }
    changeImage = delta => () => {
        this.setState(prevState => ({
            picNum: this.mod(prevState.picNum + delta, 6)
        }));
    };
    render() {
        return (
            <div className="row apart">
                <PageSlider next={this.changeImage(-1)} char="<" />
                <ImageViewer num={this.state.picNum} />
                <PageSlider next={this.changeImage(1)} char=">" />
            </div>
        );
    }
}

export default Gallery;

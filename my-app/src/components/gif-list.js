import React, { Component } from "react";
import Gif from "./gif";
import NoGifs from "./no-gifs";

const View = props => {
    const results = props.data;
    let gifs;
    if (results.length > 0) {
        gifs = results.map(gif => (
            <Gif url={gif.images.fixed_height.url} key={gif.id} />
        ));
    } else {
        gifs = <NoGifs />;
    }

    return <ul className="all-cards tight-list">{gifs}</ul>;
};

export default View;

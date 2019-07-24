import React, { Component } from "react";

const View = props => {
    return (
        <li className="user-card tight-items">
            <img src={props.url} alt="" />
        </li>
    );
};

export default View;

import React, { Component } from "react";
import styles from "./styles.module.css";

const View = props => {
    return (
        <div className={styles.draggableCard}>
            {props.dragger}
            <p className="mb-0">Something</p>
        </div>
    );
};

export default View;

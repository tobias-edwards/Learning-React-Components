import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    sortableContainer,
    sortableElement,
    sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";

const DragHandle = sortableHandle(props => {
    return <p className="dragger">X</p>;
});

const test = <DragHandle />;

const SortableItem = sortableElement(({ value }, useDragHandle) => (
    <li className="no-style-list row">
        {useDragHandle && React.cloneElement(value, { dragger: test })}
    </li>
));

const SortableContainer = sortableContainer(({ children }) => {
    return <ul className="col">{children}</ul>;
});

class Draggable extends Component {
    state = {
        items: this.props.children
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex)
        }));
    };

    render() {
        const { items } = this.state;

        return (
            <SortableContainer
                onSortEnd={this.onSortEnd}
                useDragHandle={this.props.dragHandle}
                lockAxis={this.props.axis}
                lockToContainerEdges={this.props.contained}
                lockOffset={this.props.offset}
            >
                {items.map((value, index) => (
                    <SortableItem
                        useDragHandle={this.props.dragHandle}
                        key={`item-${index}`}
                        index={index}
                        value={value}
                    />
                ))}
            </SortableContainer>
        );
    }
}

Draggable.defaultProps = {
    axis: "y",
    contained: true,
    dragHandle: false,
    offset: "0%"
};

export default Draggable;

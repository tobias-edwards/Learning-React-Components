import React, { useState } from "react";

const View = props => {
    const [searchText, setsearchText] = useState("");
    let query = React.useRef(null);

    const onSearchChange = e => {
        setsearchText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSearch(query.value);
        e.currentTarget.reset();
    };

    return (
        <React.Fragment>
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    onChange={onSearchChange}
                    name="search"
                    ref={input => (query = input)}
                    aria-label="Search..."
                    aria-describedby="basic-addon2"
                />
                <button type="button" className="btn btn-primary" id="submit">
                    Search
                </button>
            </form>
        </React.Fragment>
    );
};

export default View;

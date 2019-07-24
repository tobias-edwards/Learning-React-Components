import React, { useState } from "react";
import axios from "axios";
import GIFList from "./gif-list";
import SearchForm from "./search-form";

class View extends React.Component {
    state = {
        gifs: [],
        loading: true
    };

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = "dogs") => {
        axios
            .get(
                `http://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=dc6zaTOxFJmzC`
            )
            .then(response => {
                this.setState({ gifs: response.data.data, loading: false });
            })
            .catch(error => {
                console.log("Error fetching and parsing data", error);
            });
    };

    render() {
        return (
            <div className="col">
                <SearchForm onSearch={this.performSearch} />
                {this.state.loading ? (
                    <p className="gif-text">Loading...</p>
                ) : (
                    <GIFList data={this.state.gifs} />
                )}
            </div>
        );
    }
}

export default View;

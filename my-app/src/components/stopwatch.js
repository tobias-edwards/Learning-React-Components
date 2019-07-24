import React from "react";

class Stopwatch extends React.Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount = () => {
        this.intervalId = setInterval(() => this.tick(), 100);
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));

        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    };

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    };

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime:
                    prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    };

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="row apart">
                <div className="row">
                    <button
                        className={
                            "btn mr-2 " +
                            (this.state.isRunning
                                ? "btn-danger"
                                : "btn-success")
                        }
                        onClick={this.handleStopwatch}
                    >
                        {this.state.isRunning ? "Stop" : "Start"}
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </div>
                <span className="display-4 stopwatch-timer">{seconds}</span>
            </div>
        );
    }
}

export default Stopwatch;

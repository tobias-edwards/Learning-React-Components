import React from 'react';

class Impure extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    setInterval(() => {
      this.setState({ count: 0 });
    }, 1000);
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}

export default Impure;

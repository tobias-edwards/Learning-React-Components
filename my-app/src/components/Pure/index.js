/*import React, { useState } from 'react';

const Pure = () => {
  const [count, setCount] = useState(0);
  setInterval(() => {
    setCount(0);
  }, 1000);

  return <p>{count}</p>;
};

export default Pure;
*/

import React from 'react';

/* PureComponent compares state/prop values between renders, if no change then render() is not called.
 * This comparison is a shallow-one:
 * - Primitives: === equality
 * - Objects: Object.is() reference
 */
class Pure extends React.PureComponent {
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

export default Pure;

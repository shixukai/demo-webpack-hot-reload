import React, { PropTypes } from 'react';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div> {this.props.children} </div>
    );
  }
}

export default App;

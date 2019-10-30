import React, { Component } from 'react';
import { testWrapper } from '../hocs/testHoc';

class TestComponent extends Component {
  render() {
    return (
      <div className="test-component-text">
        I am TestComponent, I got data from HOC as {this.props.fromHoc}
      </div>
    );
  }
}

export default testWrapper(TestComponent);
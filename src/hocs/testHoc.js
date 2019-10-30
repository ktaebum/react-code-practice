import React, { Component } from 'react';

const testWrapper = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { message: "SWPP" }
    }

    render() {
      return (
        <WrappedComponent fromHoc={this.state.message} {...this.props} />
      )
    }
  }
}

export { testWrapper };
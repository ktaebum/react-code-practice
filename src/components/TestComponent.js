import React, { Component } from 'react';
import { testWrapper } from '../hocs/testHoc';

import { ThemeConsumer } from '../contexts/theme';

import { Button } from 'react-bootstrap';

class TestComponent extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ state, actions }) => (
          <div className="test-component-text">
            <div className="theme-change-button">
              <Button variant={state.theme} onClick={actions.toggleTheme}>
                {state.theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
            </div>
            I am TestComponent, I got data from HOC as {this.props.fromHoc}
            <div className="test-component-button">
              <Button variant={state.theme}>Test Component Button</Button>
            </div>
          </div>
        )
        }
      </ThemeConsumer>
    );
  }
}

export default testWrapper(TestComponent);
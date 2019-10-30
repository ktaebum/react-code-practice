import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

const { Provider, Consumer: ThemeConsumer } = ThemeContext;

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
    } else {
      this.setState({ theme: 'light' });
    }
  }

  render() {
    const state = {
      theme: this.state.theme,
    };
    const actions = {
      toggleTheme: this.toggleTheme,
    }
    const value = { state, actions }

    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  ThemeProvider,
  ThemeConsumer
};
import React from 'react';

const LoggedIn = React.createContext();

export default class AuthProvider extends React.Component {
  state = {
    LoggedIn: false
  }

render() {
  return (
    <LoggedIn.Provider value={{
      state: this.state,
      signIn: () => this.setState({
        LoggedIn: true
      })
    }}>
      {this.props.children}
    </LoggedIn.Provider>
  )
}
}



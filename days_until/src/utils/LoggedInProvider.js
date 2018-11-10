import React from 'react';
import { Provider } from './wrapper'

export default class LoggedInProvider extends React.Component {
  state = {
    auth: false,
    username: "",
    password: "",
    confirmPassword: ""
  };

  toggleAuth = () => {
    this.setState({ auth: !this.state.auth });
  };

render() {
  return (
    <Provider 
    value={{ state: this.state, action: { toggleAuth: this.toggleAuth } }}
    >
      {this.props.children}
    </Provider>
  );
}
}



import React from 'react';


export const { Provider, Consumer } = React.createContext({});

export function authWrapper(WrappedComponent) {
  return function contextWrapper(props) {
    return (
      <Consumer>{value => <WrappedComponent {...props} {...value} />}</Consumer>
    );
  };
}

export default authWrapper;


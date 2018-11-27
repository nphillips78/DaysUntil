import React from 'react';
import ReactDOM from 'react-dom';
import rome from 'rome';
export default class Rome extends React.Component {
    constructor(props) {
      super(props);
      
      this.onRomeData = this.onRomeData.bind(this);
    }
    
    componentDidMount() {
      const romeNode = ReactDOM.findDOMNode(this.romeRef);
      this.rome = rome(romeNode);
      this.rome.on('data', this.onRomeData);
    }
    
    componentWillUnmount() {
      this.rome.off();
    }
    
    onRomeData() {
      console.log('Fire!!');
    }
    
    render() {
      return <input type="text" ref={r => { this.romeRef = r }} />;
    }
  }
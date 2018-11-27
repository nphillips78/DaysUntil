import React from 'react';
import ReactDOM from 'react-dom';
import rome from 'rome';
/**
 * 
 * this component can be used as a dropdown date picker. 
 * the ref api is also set up with onRomeData() method
 * this is ported over from rome.js to work with React
 * https://github.com/bevacqua/rome/issues/55
 * 
 */
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
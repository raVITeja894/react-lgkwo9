import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { createStore } from 'redux';
import Reducer from './Reducer';
import {Provider} from 'react-redux'
import first from './first'
import second from './second'
const myStore= new createStore(Reducer)

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <first />
        <second />

      </div>
    );
  }
}

render(<Provider store={myStore}><App />
</Provider>, document.getElementById('root'));

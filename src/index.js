import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      swaras: ''
    };
  }

  nameize = (items) => {
    return items.map(item => {
      return {name: item}
    });
  }

  getPermutations = (string) => {
    if (string === '') {
      return []
    }

    var results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = this.getPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }

  renderPermuations =  (permutations) => {
    return permutations.map((item, index) => {
      return (
        <li key={index}> {item} </li>
      )
    });
  }

  render() {
    return (
      <div>
        <p> Enter the swaras to generate the merukhand combinations. </p>
        <p> Example - srg </p>

        <label>
          Swaras:
          <input type="text" value={this.state.swaras} onChange={(event) => this.setState({swaras: event.target.value})} />
        </label>
        <ul>
        {this.renderPermuations(this.getPermutations(this.state.swaras))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

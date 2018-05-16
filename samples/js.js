/**
 * Comment
 *
 * comment comment comment comment comment comment comment comment comment
 * comment comment comment comment comment
 */

// Comment

import React, { Component } from 'react';
import PropTypes from 'prop-types';

var variable = 'string';
var variable2 = variable;
var myRe = /d(b+)d/g;

let localVar = 'string';

const constant = 'CONSTANT';

let numOperator = (3 + 4) / 2;
const numPlus = numOperator++;

let arr = ['one', 'two', numOperator];

let obj = {
  first: 'string',
  second: ['one', 'two', numOperator],
};

let templateLiteral = `this is a var ${variable}`;

if (localVar) {
  console.log('log');
} else {
  console.log('log');
  console.log(window.location.hash);
}

function name(param) {
  let output = param + 'string';
  return output;
}

const funcName = param => {
  return false;
};

class ComponentName extends Component {
  static propTypes = {
    param: PropTypes.string,
    children: PropTypes.node,
  };

  constructor() {
    super();
    this.state = {
      one: 'two',
    };
  }

  classProperty = () => {
    const test = 'test';
    return test;
  };

  handleClick() {
    return false;
  }

  render() {
    const { one: value } = this.state;
    const { param } = this.props;

    // some comments
    const two = name(param, param, { key: value });

    console.log(two);

    return (
      <div>
        {this.props.children}
        <button onClick={this.handleClick}>Click Me</button>
        <ComponentName2 />
      </div>
    );
  }
}

const ComponentName2 = () => {
  return <ComponentName>text text text</ComponentName>;
};

const arr = new Array();

export default ComponentName2;

/**
 * Comment
 *
 * comment comment
 */

// Comment

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

import React, { Component } from 'react';

class ComponentName extends Component {
  constructor() {
    super();
    this.state = {
      one: two,
    };
  }

  classProperty = () => {
    const test = 'test';
    return test;
  };

  method() {
    return false;
  }

  render() {
    const { one } = this.state;

    const two = name(param, param, { key: value });

    console.log(one.three);

    return (
      <div>
        {this.props.children}
        <SomeComponent prop={this.method} />
      </div>
    );
  }
}

const ComponentName2 = () => {
  return <ComponentName>text text text</ComponentName>;
};

export default ComponentName2;

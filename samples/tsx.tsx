import * as React from 'react';
import * as DOM from 'react-dom';
import HelloWorld from './helloworld';

const root = document.getElementById('app');

function test(hello) {
  console.log(hello);
}

const bye = () => console.log('bye');

type Props = {
  vehicleType: 'Car' | 'Truck' | 'Motorcycle';
  color: string;
  numWheels: 2 | 4;
  age: number;
};
type State = {};

class Main extends React.Component<Props, State> {
  state = {};

  classProperty = ({ hello }, bye) => {
    return hello;
  };

  render() {
    <div>
      <div>VehicleType: {this.props.vehicleType}</div>
      <div>Color: {this.props.color}</div>
      <div>Wheels: {this.props.numWheels}</div>
      <div>Age: {this.props.age}</div>
    </div>;
  }
}

DOM.render(<Main />, root);

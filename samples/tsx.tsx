import * as React from 'react'
import * as DOM from 'react-dom'

const root = document.getElementById('app')

function test(hello) {
  console.log(hello)
}

test()

const bye = () => console.log('bye')

type Props = {
  vehicleType: 'Car' | 'Truck' | 'Motorcycle'
  color: string
  numWheels: 2 | 4
  age: number
}
type State = {}

class Main extends React.Component<Props, State> {
  static propTypes = {
    prop1: PropTypes.number,
  }

  constructor(props: Props) {
    super(props)

    this.test = props.test
  }

  classProperty = ({ hello }, bye) => {
    return hello
  }

  render() {
    return (
      <div>
        <div>VehicleType: {this.props.vehicleType}</div>
        <div>Color: {this.props.color}</div>
        <div>Wheels: {this.props.numWheels}</div>
        <div>Age: {this.props.age}</div>
      </div>
    )
  }
}

interface WelcomeProps {
  name?: string // Change the required prop to an optional prop.
}

const Welcome: React.SFC<WelcomeProps> = props => {
  return <h1>Hello, {props.name}</h1>
}

Welcome.defaultProps = {
  name: 'Guest User', // This value is adopted when name prop is omitted.
}

DOM.render(<Main />, root)

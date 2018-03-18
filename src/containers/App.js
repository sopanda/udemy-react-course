import React, { PureComponent } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Bohdan', age: 21},
        { id: 2, name: 'Nastasia', age: 22}, 
        { id: 3, name: 'Max', age: 28}
      ],
      otherState: "some other state",
      showPersons: false
    }
    console.log("[App.js] - inside constuctor()", props);
  }

  componentWillMount() {
    console.log("[App.js] - inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] - inside componentDidMount()");
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[UPDATE App.js] - inside shouldComponentUpdate()", nextProps, nextState);
//     // return true;
//     return nextState.persons !== this.state.persons ||
//            nextState.showPersons !== this.state.showPersons;
//  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] - inside componentWillUpdate()", nextProps, nextState);        
 }

  componentDidUpdate() {
    console.log("[UPDATE App.js] - inside componentDidUpdate()");        
  }
  // state = {
  //   persons: [
  //     { id: 1, name: 'Bohdan', age: 21},
  //     { id: 2, name: 'Nastasia', age: 22}, 
  //     { id: 3, name: 'Max', age: 28}
  //   ],
  //   otherState: "some other state",
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id === id;
      }
    ); // getting target person id

    const person = {
      ...this.state.persons[personIndex]
    } // copy it to new object
    
    person.name = event.target.value;

    const persons = [...this.state.persons];// copy persons array to new object
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // we just copy, not mutate over state values
    const persons = [...this.state.persons]; // better, convinion way
    persons.splice(personIndex, 1);
    this.setState ({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log("[App.js] - inside render()");

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons= { this.state.persons }
          clicked= { this.deletePersonHandler }
          changed= { this.nameChangedHandler } />;
    }

    return (
        <Aux>  
          <button onClick={ () => {this.setState({showPersons:true})} }>Show Persons</button>
            <Cockpit 
            appTitle={ this.props.title }
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
            />
            { persons }
        </Aux>
    );
  }
}

export default withClass(App, classes.App);

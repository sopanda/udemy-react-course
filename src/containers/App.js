import React, { Component } from 'react';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
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
        <div className={ classes.App }>  
          <Cockpit 
          appTitle={ this.props.title }
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
          />
          { persons }
        </div>
    );
  }
}

export default App;

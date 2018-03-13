import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

 
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] - inside constuctor()", props);
      }
    
      componentWillMount() {
        console.log("[Persons.js] - inside componentWillMount()");
      }
    
      componentDidMount() {
        console.log("[Persons.js] - inside componentDidMount()");
      }

    render() {
        console.log("[Persons.js] - inside render()");

        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key= { person.id }>
                <Person 
                  click = { () => this.props.clicked(index)}
                  name= { person.name }
                  age= { person.age } 
                  changed= { (event) => this.props.changed(event, person.id)}/> 
              </ErrorBoundary>
          });
    }
}

export default Persons;

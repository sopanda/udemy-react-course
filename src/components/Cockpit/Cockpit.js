import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    // let classes = ['red', 'bold'].join(' '); // create one string 'red bold'
    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);//classes = [red]
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = [red, bold]
    }

    return ( 
        <Aux>
            <h2> { props.appTitle } </h2> 
            <p className = {assignedClasses.join(' ')}>it 's not me, it's you; 3</p>
            <button 
            className = {btnClass}
            onClick = {props.clicked}>
            Toggle Persons </button> 
        </Aux>
    );
};

export default cockpit;

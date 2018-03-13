import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
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
        <div className= {classes.Cockpit}>
            <h2> { props.appTitle } </h2> 
            <p className = {assignedClasses.join(' ')}>it 's not me, it's you; 3</p>

            {console.log(classes)}

            <button 
            className = {btnClass}
            onClick = {props.clicked}>
            Toggle Persons </button> 
        </div>
    );
};

export default cockpit;

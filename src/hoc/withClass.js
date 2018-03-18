import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className= {className}>
//             <WrappedComponent {...props}/> passing UNKNOWN props with spread operator
//         </div>
//     )
// };

/* IT'S LIKE ANONYMOUS CLASS */

const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className= {className}>
                    <WrappedComponent {...this.props} /> 
                </div>
            );
        }
    }
}

export default withClass;

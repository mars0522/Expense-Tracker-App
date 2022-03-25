import React,{ Component } from "react";

// class Welcome extends Component{
//     render(){
//         return <h1>Name: {this.props.name} , Age: {this.props.age}</h1>
//     }
// }

class Welcome extends Component{
    render(){
        const {fname,lname}= this.props;
        // const {state1, state2} = this.state;

        return (
            <div>
                <h1>First Name: {fname}</h1>
                <h1>Last Name: {lname}</h1>
            </div>
        )
    }
}
export default Welcome;
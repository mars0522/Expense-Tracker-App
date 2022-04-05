import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitors'
        }
    }

    changeState(){
        this.setState({                            // setState() is a class method and we can access it using this
            message: 'Thanks for Subscribing'
        })
    }
    render(){
        return(
            <div>
            <h1> {this.state.message} </h1>
            <button onClick={()=> this.changeState()}> Subscribe</button>
            </div>
        )
    }
}

export default Message;
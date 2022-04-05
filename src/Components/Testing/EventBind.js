import React, { Component } from 'react'

 class EventBind extends Component {

   
    constructor(){
        super();
        this.state = {
            message:"Hello "
        }
        this.EventHandler.bind(this);
    }

    EventHandler(){
        
        this.setState({
            message : "Ok then, Good Bye ! ):"
        })
    }

   
    render() {
    return (
      <div>

          <h1>{this.state.message}</h1>
          {/* <button onClick={this.EventHandler.bind(this)}>Click</button> */}
          <button onClick={()=> this.EventHandler()}> Click Me</button>
         
      </div>
    )

}

}

export default EventBind
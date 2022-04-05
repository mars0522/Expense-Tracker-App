import React, { Component } from 'react'

class ClassClick extends Component {

    eventhandler() {
        console.log("Class button has been clicked");
    }
  render() {
    return (
      <div>
          <button onClick={this.eventhandler}>Click!</button>
      </div>
    )
  }
}

export default ClassClick
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    // Increment(){

    //     // setState() method  accepts the two parameters one is object and the other is callback function which will be executed only after the state of the component is changed
    //     this.setState({
    //         count : this.state.count+1 
    //     }, ()=> {console.log('Call back updated value :', this.state.count)})

    //     console.log(this.state.count); // this function is executed before the state is being changed therefore it will be always 1 less than  original value
    // }

    // New Increment funtion
    Increment(){
        this.setState( (prevState, props) => ({count:prevState.count+1}),()=>{console.log('Callback value: ',this.state.count)});
                                    // we are enclosing  count:prevState.count+1 within braces because funtion is returning object literal
    }
    Decrement(){
        this.setState({
            count: this.state.count-1
        })
    }
    Reset(){
        this.setState({
            count:0
        })
    }

    IncrementFive(){
        
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();

        // React Combines all the setState() method in a single group and excute in one go.
        // So whenwhen you want to change the state based on the previous state, pass funtion which
        // has the access to the previous state rather than passing the object

    }

   
    render() {
    return (
      <div>
          <div><b>Counter -></b> {this.state.count} </div>
          {/* Increment by 1 */}
          {/* <button onClick ={()=> this.Increment()}>Increment</button> */}
          {/* Increment by 5 */}
          <button onClick={()=> this.IncrementFive()}>Increment</button>
          <button onClick ={()=> this.Decrement()}>Decrement</button>
          <button onClick={()=>this.Reset()}> Reset </button>
      </div>
    )
  }
}

export default Counter
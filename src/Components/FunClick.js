import React from "react";

function FunClick(){

    function eventhandler(){
        console.log("Button has been Clicked");
    }
    return (
        <div>
            <button onClick={eventhandler}>Click Me!</button>
        </div>
    )
}

export default FunClick;
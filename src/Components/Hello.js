import React from "react";



 const Hello = ()=> {

    // This component is created using JSX
//     return (
//         <div id="hello" , className = "dummyClass">
//             <h1>Hello World !</h1>
//         </div>
//     )

        // Now Creating Component without using JSX

        return React.createElement(
            'div',
            {id:'Hello',className:"dummyClass"},
            React.createElement('h1',null,'Hello World !!!')
        )

 }

 export default Hello




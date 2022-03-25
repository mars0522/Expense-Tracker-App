import React from "react";

// This is First Functional Component
// function Greet(){
//     return <h1>Hellow , Varun !!</h1>
// }

// const Greet = props=> {
//     console.log(props);
//    return ( // we need a single wrapper
//        <div>
//            <h1>Hello, {props.name} and his hero is {props.hero} !!</h1>
//            {props.children}
//        </div>
//    )
// }



// destructuring props

// 1) Destructure in the function parameter
// const Greet = ({name,heroname})=>{
//     return(
//         <div>
//             <h1>Name : {name}</h1>
//             <h1>HeroName: {heroname}</h1>
//         </div>
//     )
// }

// 2) Destructure in the function body

const Greet = (props) =>{

    const {name,heroname}= props;

    return (
        <div>
            <h1>My name is : {name}</h1>
            <h1>My Hero name is: {heroname}</h1>
        </div>
    )
}


export default Greet;
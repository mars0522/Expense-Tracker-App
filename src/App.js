import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import EventBind from "./Components/EventBind";
import ClassClick from "./Components/ClassClick";
import Counter from "./Components/Counter";
import FunClick from "./Components/FunClick";
import Greet from "./Components/Greet";
import Hello from "./Components/Hello";
import Message from "./Components/Hello";
import Welcome from "./Components/Welcome";
import Expenses from "./Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let expenses = [
  {
    title:'Life Insurance',
    amount:300,
    date: new Date(2020,7,14),
  }
]
function App() {

  const [expense_arr , updateExpenses] = useState(expenses);
   const onAddExpenseHandler = (AddedItem)=>{ 
   
    updateExpenses([...expense_arr,AddedItem]);
    console.log(expense_arr);
  }
  return (
    <div className="App">
      {/*       
       <Greet name="Varun" hero="super man">
        <p>Hi, I am a paragraph !!</p>
      </Greet>
      <Greet name="Rhihanna" hero="bat man" />
      <Greet name="Naushad"  hero="spider man">
        <button>Click</button>
      </Greet>  */}

      {/* SecCompo is a class component */}
      {/* <Welcome name ="vishnu" age="18"/>
       <Welcome name ="Pranjal" age="23"/>

       <Message />

      <Hello /> 

      <Counter />
      <Greet name="Varun" heroname = "superman"></Greet>

      <Welcome fname="Rahul" lname = "Sharma"></Welcome>

      <FunClick />
    <ClassClick /> */}
    {/*<EventBind />  */} 
  <NewExpense addExpense={onAddExpenseHandler}/>
  <Expenses arr = {expense_arr} /> 

    </div>
  );
}

export default App;

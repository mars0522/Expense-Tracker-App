import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./Components/ExpenseTrancker/NewExpense/NewExpense";
import Expenses from "./Components/ExpenseTrancker/Expenses";

let expenses = [
  // {
  //   title:'Life Insurance',
  //   amount:300,
  //   date: new Date(2020,7,14),
  // }
];
function App() {
  const [expense_arr, updateExpenses] = useState(expenses);
  const onAddExpenseHandler = (AddedItem) => {
    // updateExpenses([...expense_arr, AddedItem]);

    updateExpenses((prevState) => {
      return [...prevState, AddedItem];
    });
    console.log(expense_arr);
  };
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

      {/*This component is helping to update expense array*/}
      <NewExpense addExpense={onAddExpenseHandler} />

      {/* This component is using Updated expense array*/}
      <Expenses arr={expense_arr} />
    </div>
  );
}

export default App;

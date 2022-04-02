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
function App() {

  let expenses = [
    { day:15,month:'August',year:2019, expenseItem:'Life Insurance', expenseAmount:234.23},
    { day:12,month:'july',year:2020, expenseItem:'Car Insurance', expenseAmount:334.23 },
    { day:14,month:'June',year:2022, expenseItem:'Mac Book', expenseAmount:782.23},
    { day:19,month:'April',year:2020, expenseItem:'House EMI', expenseAmount:10000.23}
   ]

   const onAddExpenseHandler = (expenseItem)=>{
    console.log('In App.js');
    console.log(expenseItem);
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
  <Expenses arr = {expenses} /> 

    </div>
  );
}

export default App;

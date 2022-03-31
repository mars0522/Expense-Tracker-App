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
import ExpenseItem from "./Components/ExpenseItem";

function App() {
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
      <ClassClick />
     <EventBind /> */}

      <ExpenseItem
        date="12"
        month="July"
        year="2022"
        expenseItem="Life Insurance"
        expenseAmount="234.45"
      />
      <ExpenseItem
      date="12"
      month="July"
      year="2022"
      expenseItem="Life Insurance"
      expenseAmount="234.45"
      />
      <ExpenseItem
      date="12"
      month="July"
      year="2022"
      expenseItem="Life Insurance"
      expenseAmount="234.45"  
      />
      <ExpenseItem
      date="12"
      month="July"
      year="2022"
      expenseItem="Life Insurance"
      expenseAmount="234.45"
      />
    </div>
  );
}

export default App;

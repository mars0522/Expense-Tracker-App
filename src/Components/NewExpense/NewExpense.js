import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [IsEditing,setISediting] = useState(false);
  const onSaveHandler = (enteredExpense) => {
    const newObj = {
      title: enteredExpense.title,
      amount: enteredExpense.amount,
      date: new Date(enteredExpense.date),
    };
    props.addExpense(newObj);
  };

  const clickHandler= ()=>{
    setISediting(true);
  }

  const cancelEditing=()=>{
    setISediting(false);
  }
  return (
    <div className="new-expense">

      {!IsEditing && <button onClick={clickHandler}>Add Expense</button>}
      {IsEditing && <ExpenseForm onSave={onSaveHandler} cancelEditing={cancelEditing}/>}
    </div>
  );
};

export default NewExpense;

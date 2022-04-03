import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense= (props)=>{

    const onSaveHandler = (enteredExpense)=>{
        // console.log(expenseData);
        props.addExpense(enteredExpense);

    }
    return (
       <div className="new-expense">
        <ExpenseForm onSave={onSaveHandler}/> 
       </div>
    )
}

export default NewExpense;
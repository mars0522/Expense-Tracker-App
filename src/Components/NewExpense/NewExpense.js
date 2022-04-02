import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense= (props)=>{

    const onSaveHandler = (enteredExpense)=>{

        const expenseData ={
            ...enteredExpense,
            id: Math.random().toString()

        }

        console.log(expenseData);
        props.addExpense(expenseData);

    }
    return (
       <div className="new-expense">
        <ExpenseForm onSave={onSaveHandler}/> 
       </div>
    )
}

export default NewExpense;
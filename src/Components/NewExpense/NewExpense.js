import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveHandler = (enteredExpense) => {
    const newObj = {
      title: enteredExpense.title,
      amount: enteredExpense.amount,
      date: new Date(enteredExpense.date),
    };
    props.addExpense(newObj);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler} />
    </div>
  );
};

export default NewExpense;

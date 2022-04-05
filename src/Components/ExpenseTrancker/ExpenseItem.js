import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {

  const [expenseItem,setTitle]= useState(props.title);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price ">${props.amount}</div>
       
      </div>
    </div>
  );
}

export default ExpenseItem;

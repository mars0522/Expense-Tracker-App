import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {

  const [expenseItem,setTitle]= useState(props.expenseItem);

  const clickHandler = ()=>{

    setTitle('Updated !!');

  }
  return (
    <div className="expense-item">
      <ExpenseDate day={props.day} month={props.month} year={props.year} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price ">{props.expenseAmount}</div>
        <button onClick={clickHandler}> Click Me </button>
      </div>
    </div>
  );
}

export default ExpenseItem;

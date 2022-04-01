import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate day={props.day} month={props.month} year={props.year} />
      <div className="expense-item__description">
        <h2>{props.expenseItem}</h2>
        <div className="expense-item__price ">{props.expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

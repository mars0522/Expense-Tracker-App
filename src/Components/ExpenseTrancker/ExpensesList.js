import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props)=>{

if(props.filteredArray.length === 0)
return <h2 className="expenses-list__fallback"> Found No Expenses !</h2>
else{
    return <div className="expenses-list">

    { props.filteredArray.map( expense => (<ExpenseItem 
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expense.date} // Whenever you are using map in React always add key prop
        />))}

    </div>
}

}

export default ExpensesList;
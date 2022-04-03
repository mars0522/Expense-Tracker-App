import React ,{useState} from 'react';
import ExpenseItem from "./Components/ExpenseItem";
import ExpensesFilter from "./Components/NewExpense/ExpensesFilter";
import './Expenses.css'

function Expenses(props){

    const [Year,updateYear] = useState('');

    const ExpenseFilterHandler = (SelectedYear)=>{
        updateYear(SelectedYear);
    }

    return (
        <div className="expenses">

            <ExpensesFilter selected={Year} filter={ExpenseFilterHandler}/>  

            {props.arr.map( expense => (<ExpenseItem 
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.date}
                />))}
          
        </div>
    );
}

export default Expenses;
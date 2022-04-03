import React ,{useState} from 'react';
import ExpenseItem from "./Components/ExpenseItem";
import ExpensesFilter from "./Components/NewExpense/ExpensesFilter";
import './Expenses.css'

function Expenses(props){

    const [Year,updateYear] = useState('');

    const ExpenseFilterHandler = (SelectedYear)=>{
        updateYear(SelectedYear);
    }

    const filteredArray = props.arr.filter(expense =>{
        return expense.date.getFullYear().toString()=== Year;
    })


    // Check why the commented code is not working

    // let expenseContent = <p>No Item found !</p>

    // if(filteredArray.length > 0){
    //     expenseContent = filteredArray.map( expense => (<ExpenseItem 
    //         date={expense.date}
    //         title={expense.title}
    //         amount={expense.amount}
    //         key={expense.date} // Whenever you are using map in React always add key prop
    //         />))
    // }

    return (
        <div className="expenses">

            <ExpensesFilter selected={Year} filter={ExpenseFilterHandler}/>  
        
            {filteredArray.length===0 && <p >No Item found !!</p>}
            {filteredArray.length > 0 && 
            filteredArray.map( expense => (<ExpenseItem 
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.date} // Whenever you are using map in React always add key prop
                />))}
        {/* {expenseContent}*/}
          
        </div>
    );
}

export default Expenses;
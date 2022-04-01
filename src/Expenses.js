import ExpenseItem from "./Components/ExpenseItem";
import './Expenses.css'

function Expenses(props){

    return (
        <div className="expenses">
            <ExpenseItem
             day={props.arr[0].day}
             month={props.arr[0].month}
             year={props.arr[0].year}
             expenseItem={props.arr[0].expenseItem}
             expenseAmount={props.arr[0].expenseAmount} />
            <ExpenseItem 
            day={props.arr[1].day}
            month={props.arr[1].month}
            year={props.arr[1].year}
             expenseItem={props.arr[1].expenseItem}
             expenseAmount={props.arr[1].expenseAmount}/>
            <ExpenseItem 
            day={props.arr[2].day}
            month={props.arr[2].month}
            year={props.arr[2].year}
             expenseItem={props.arr[2].expenseItem}
             expenseAmount={props.arr[2].expenseAmount}/>
            <ExpenseItem 
            day={props.arr[3].day}
            month={props.arr[3].month}
            year={props.arr[3].year}
             expenseItem={props.arr[3].expenseItem}
             expenseAmount={props.arr[3].expenseAmount}/>

        </div>
    );
}

export default Expenses;
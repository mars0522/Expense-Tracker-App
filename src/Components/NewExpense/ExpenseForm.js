import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    const [title,setTitle] = useState('');
    const [amount,setAmount]= useState('');
    const [date,setDate] = useState('');

//    const [userInput, stateUpdate] = useState({title:'',amount:'',date:''});

    const titleHandler = (event)=>{

        setTitle(event.target.value);

        // stateUpdate(
        //     {
        //         ...userInput,
        //         title:event.target.value
        //     }
        // )

        // stateUpdate((prevState)=>{
        //    return {
        //     ...prevState,
        //     title:event.target.value
        //    }
        // })
        

    }

    const amountHandler=(event)=>{

        setAmount(event.target.value);
        

        // Unsafe way to update the state of the react, don't go this way
        // stateUpdate({
        //     ...userInput,
        //     amount:event.target.value
        // })

        // Safe way to update your state

        // stateUpdate((prevState)=>{
        //    return {...prevState,
        //     amount:event.target.value} 
        // })
        
    }

    const dateHandler = (event)=>{
        
        setDate(event.target.value);
        // stateUpdate({
        //     ...userInput,
        //     date:event.target.value
        // })

        // stateUpdate((prevState)=>{
           
        //     return { ...prevState,
        //         date:event.target.value}

        // })
       
    }

    const submitHandler= (event)=>{
        event.preventDefault();

        const expenseData = {
            t: title,
            a:amount,
            d: date
        };

        props.onSave(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

    }

    return <form onSubmit={submitHandler}>

    <div className="new-expense__controls">

    <div className="new-expense__controls">
       <label>Title</label>
       <input type='text'  value={title} onChange={titleHandler}/>
    </div>

    <div className="new-expense__controls">
       <label>Amount</label>
       <input type='number' min='1' step='0.01' value={amount} onChange={amountHandler}/>
    </div>

    <div className="new-expense__controls">
       <label>Date</label>
       <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateHandler} />
    </div>

    </div>

    <div className="new_expense__actions">
    <button type="submit">Add Expense</button>
    
    </div>


    </form>

}

export default ExpenseForm;
function ExpenseDate(props) {

    return(
        <div>
        <div>{props.date}</div>
        <div>{props.month}</div>
        <div>{props.year}</div>
        </div>
    )

}

export default ExpenseDate;
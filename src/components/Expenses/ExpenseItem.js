import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
//useState is a hook in reactjs
function ExpensItem(props) {


    const [title, setTitle] = useState(props.title); //must be called directly inside the function
    //useState returns a function 
    //here setTitle is a state updating function
    //we want that this component is being called again when the state changes by pressing the buttton 



    const clickHandler = () => {
        setTitle('Updated');  //by this we telling the react that we want to assign new title that is updated when the state changes
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );

}

export default ExpensItem;

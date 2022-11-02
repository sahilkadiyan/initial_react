import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpensItem(props) {
    // const expenseDate = new Date(2022, 11, 2);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67

    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );

}

export default ExpensItem;

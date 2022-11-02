//this is JSX javascript xml
//that's why we are bale to write html code in javascript 
//this is working because behind the scenes tranformation steps are done automatically 
//transform this javascript code into more friendly code 
//jsx is not normally supported in the browser 
//components can't just use data stored in other components

import Expenses from "./components/Expenses/Expenses";
//arrow function 
const App=()=> {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <div>
            <h2>Let's get started</h2>
            <Expenses items={expenses}/>
           

        </div>
    );
}
export default App;

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveData =(formdata)=>{
        const saveExpense={
            ...formdata,
            id:Math.random().toString()
        };
        // console.log(saveExpense);
        props.getDataFromNewExpense(saveExpense);
    }
    return(
        <div className="new-expense">
            <ExpenseForm data1={saveData}/>
        </div>
    )
}

export default NewExpense;
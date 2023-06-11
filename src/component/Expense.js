import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expense.css';
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./NewExpense/ExpensesChart";
function Expense(props){
  const [filteredYear,setFilteredYear]=useState('2019');





      const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);



        
      };
   

      const filteredExpenses = props.expenses.filter(expense => {
        const expenseYear = expense.date.getFullYear().toString();
        return expenseYear === filteredYear;
      });


      return (
        <Card className="expense">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length ===0 ? (<p>No Data Found</p>) :filteredExpenses.map((expense)=>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))}
        </Card>
      );

}

export default Expense
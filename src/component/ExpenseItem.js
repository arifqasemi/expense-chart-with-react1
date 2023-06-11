import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, { useState } from 'react';
function ExpenseItem(props){
   
const [title,setTitle]=useState(props.title);



    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description"> {props.title}</div>

            <div className="expense-item__price"> {props.amount}</div>

        </Card>
    )

}

export default ExpenseItem;
import React from 'react';
import './expenseitem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const Expenseitem=(props)=> {
  return (
    <Card className="expense-item">
       <ExpenseDate datesnow={props.date} />
       <div className="expense-item_description">
           <h2>{props.title}</h2>
            <div className="expense-item_price">${props.price}</div>
       </div>
    </Card>
  )
}

export default Expenseitem
import React from 'react';
import './expensedate.css';

const ExpenseDate=({datesnow})=>{
const month = datesnow.toLocaleString('en-US',{ month:'long' });
const day = datesnow.toLocaleString('en-US',{ day:'2-digit' });
const year = datesnow.getFullYear();

return (
    <div className="expense-date">
           <div className="expense-date_month">{month}</div>
           <div className="expense-date_day">{day}</div>
           <div className="expense-date_year">{year}</div>
    </div>
  )
}

export default ExpenseDate
import React,{ useState } from 'react'
import './expenseForm.css'
function ExpenseForm(props) {
    const [Newtitles,setNewtitles]=  useState('')
    const [NewAmount,setNewamount]=  useState('')
    const [NewDate,setNewDate]=  useState('')
    const titleChangeHandler =(event)=>{
        setNewtitles(event.target.value)
    }
    const amountChangeHandler =(event)=>{
        setNewamount(event.target.value)
    }
    const dateChangeHandler =(event)=>{
        setNewDate(event.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const newdata ={
            title: Newtitles,
            price : NewAmount,
            date: new Date(NewDate)
        }
        props.SaveDataForm(newdata)
        setNewtitles('');
        setNewamount('');
        setNewDate('')
    }
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" 
                value={Newtitles}
                onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={NewAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="Date" value={NewDate}  onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense_actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
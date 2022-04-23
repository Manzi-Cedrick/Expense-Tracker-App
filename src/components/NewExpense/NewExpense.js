import React from 'react'
import ExpenseForm from './ExpenseForm'
import './newExpense.css'
function NewExpense(props) {
  const SaveDataForm =(enteredData)=>{
    const expensedata={
      ...enteredData,id:Math.floor(Math.random()*100).toString()
    }
    props.allexpensesdata(expensedata)
  }
  return (
    <div className="new-expense">
        <ExpenseForm SaveDataForm={SaveDataForm}/>
    </div>
  )
}

export default NewExpense
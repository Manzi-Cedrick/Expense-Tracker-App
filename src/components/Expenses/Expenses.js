import React,{ useState } from 'react';
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import Expenseitem from './Expenseitem'
import './expenses.css'

const Expenses=(props) =>{
  const [filteryear,setfilteryear] = useState('2019')
  const filterChangeHandler = selectedyear =>{
    setfilteryear(selectedyear);
  }
  const filteredExpenses = props.expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === filteryear
  })
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteryear} onChangeFilter={filterChangeHandler}/>
    <ExpenseChart expenses={filteredExpenses}/>
    {filteredExpenses.length === 0 ?(
      <p>No expenses were selected</p>
    ):(
    filteredExpenses.map((expenses )=> (
       <Expenseitem 
       key={expenses.id}
       title={expenses.title} 
       price={expenses.price} 
       date={expenses.date} 
        />
    )))}
    
    </Card>
  )
}

export default Expenses
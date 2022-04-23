import React,{ useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const dummy_expenses = [
  {id:1,title: 'Car Insurance',date: new Date(2022,4,2),price:5090},
  {id:2,title: 'Toilet Paper',date: new Date(2021,2,12),price:856},
  {id:3,title: 'Computer Repair',date: new Date(2019,1,6),price:230},
  {id:4,title: 'TV Services',date: new Date(2020,3,7),price:1000}
];
const App=()=>{
  const [expenses,setExpenses]=useState(dummy_expenses);
  const allexpensesdata =(expensesdata)=>{
    setExpenses((prevExpense)=>{
      return [expensesdata,...prevExpense]
    })
  } 
  return (
    <div className="App">
      <NewExpense allexpensesdata={allexpensesdata} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;

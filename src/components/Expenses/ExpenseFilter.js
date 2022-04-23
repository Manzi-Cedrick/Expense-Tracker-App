import React from 'react'
import './expensefilter.css'

function ExpenseFilter(props) {
    const dropdownHandler =event=>{
        props.onChangeFilter(event.target.value)
    }
  return (
    <div className="expense-filters">
        <div className="expense-filters_control">
            <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
        </div>
    </div>
  )
}

export default ExpenseFilter
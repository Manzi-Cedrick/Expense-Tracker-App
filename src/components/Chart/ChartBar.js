import React from 'react'
import './chartbar.css'
function ChartBar(props) {
    let barfillheight ='0%'
    if(props.maxValue >0){
        barfillheight = Math.round((props.value/props.maxValue)*100) + '%';
    }
  return (
    <div className="chart-bar">
        <div className="chart-bar_inner">
            <div className="chart-bar_fill" style={{height: barfillheight ,backgroundColor:'red'}}></div>
        </div>
        <div className="chart-bar_label">
            {props.label}
        </div>
    </div>
  )
}

export default ChartBar
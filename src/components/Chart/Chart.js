import React from 'react'
import ChartBar from './ChartBar'
import './chart.css'
function Chart(props) {
  const ValueArr = props.datapoints.map(datapoint => datapoint.value);
  const totalMax =Math.max(...ValueArr)
  return (
    <div className='chart'>
        {props.datapoints.map(datapoint=> <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMax} label={datapoint.label} /> )}
    </div>
  )
}

export default Chart
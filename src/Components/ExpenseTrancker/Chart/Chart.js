import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props)=>{

    let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const MaxValue = Math.max(...dataPointValues);

    return(
        <div className="chart">

        {props.dataPoints.map(dataPoint =>
             <ChartBar  
             key={dataPoint.label}
             value={dataPoint.value} 
             maxValue={MaxValue} 
             label={dataPoint.label} />)}

        </div>
    )


}
export default Chart;
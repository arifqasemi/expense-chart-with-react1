import ChartBar from "./ChartBar";
import './Chart.css';
function  Chart(props) {
    const dataPointsValue = props.dataPoints.map((dataPoint) =>dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);
   

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>(
            
            <ChartBar key={dataPoint.label} value={dataPoint.value} lable={dataPoint.label} maxValue={totalMaximum}/>

            ))}
        </div>

    )
    
}

export default Chart;
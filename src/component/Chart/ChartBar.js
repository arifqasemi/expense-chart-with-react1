import './ChartBar.css';
import React from 'react';
function ChartBar(props) {
    let barFillHigth = "0%";
    if(props.maxValue > 0){
        barFillHigth = Math.round((props.value /props.maxValue) * 100) + "%";
        
    }

    return(
        <div className='chart-bar'>
        <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFillHigth}}></div>
        </div>
        <div className='chart-bar__label'>{props.lable}</div>
        </div>
    )
    
}

export default ChartBar;
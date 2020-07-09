import React from 'react'
import {connect} from 'react-redux'
import { Chart } from 'react-charts'

 

function Graph(props) {
    
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: props.data
        },
      ],
      []
    )
    
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
        
      <div
        style={{
          width: '400px',
          height: '300px'
        }}> 
        {console.log(props.data)}
        <div className="lefttitle">Cost</div>
        
        <Chart data={data} axes={axes} />
        <div className="bottomtitle">Time</div>
      
      </div>
    )
  }


export default Graph

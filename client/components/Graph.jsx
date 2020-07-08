import React from 'react'
import {connect} from 'react-redux'
import { Chart } from 'react-charts'

 

function Graph(props) {
    
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [{ x: 1, y: 10 }, { x: 2, y: 12 }, { x: 3, y: 10 }, { x: 4, y: 15 }, { x: 5, y: 8 }, { x: 10, y: 4 }]
        },
      ],
      []
    )
    
    const getLabel = React.useCallback(series => series.specialLabel, [])
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
        <div className="lefttitle">Cost</div>
        <Chart data={data} axes={axes} getLabel={getLabel}/>
        <div className="bottomtitle">Time</div>
      
      </div>
    )
  }


export default Graph

import React from 'react'
import {connect} from 'react-redux'
import { Chart } from 'react-charts'
import { alignRight } from 'react-charts/dist/react-charts.development'

 

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
        { primary: true, type: 'ordinal', position: 'bottom', align: "right"},
        { type: 'linear', position: 'left', }
      ],
      []
    )
   
    return (
        
      <div
        style={{
          width: '400px',
          height: '300px'
        }}> 
        {console.log(props.Data)}

        <div className="lefttitle" style={{
            transform: "rotate(-90deg)",
            margin: "00px 270px 0px -180px"
        }}>Cost</div>
        
        <Chart data={data} axes={axes} />

        <div className="bottomtitle" style={{
            textAlign: "center"
        }}>Time</div>
      
      </div>
    )
  }


export default Graph

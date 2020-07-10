import React from 'react'
//import {connect} from 'react-redux'
import Graph from "./Graph"
import {getAll} from "../apis/meetings"
import Meeting from './Meeting'
//props to graph should look like ->
//  data: [{ x: 500, y: 12351235345 }, { x: 2, y: 12 }, { x: 3, y: 10 }, { x: 4, y: 15 }, { x: 5, y: 8 }, { x: 10, y: 4 }]

class GraphWrap extends React.Component {
    state = {
        meetingdata: [{ x: 1, y: 10 }, { x: 2, y: 12 }],
        dataload: false,
    }

    componentDidMount() {
       
       
   
        getAll().then(data => {
         
            let meeting = []
                data.data.map(elem=>{
                    meeting.push({x: (new Date(elem.time)).toLocaleDateString(), y: elem.cost})
                })  
                
                this.setState({
                    meetingdata: meeting,
                    dataload: true,
                })

        }
        )
    }
    
   

    render() {
        return (
            <>
           
            {/*  */}
            <div >
                    <h1><b style={{fontSize: "40px"}}>see how users of our site have benefited </b></h1>

                    </div>
              <div >{this.state.dataload ? <Graph data={this.state.meetingdata}/> : "false"}</div>
             
             
            </>
            )
        }
}
export default GraphWrap

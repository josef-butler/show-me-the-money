import React from 'react'
//import {connect} from 'react-redux'
import Graph from "./Graph"
import {getMeetings} from "../apis/meetings"

class GraphWrap extends React.Component {
    state = {

    }

    componentDidMount() {
       // getMeetings()
    }

    render() {
        return (
            <>
            <p> this is the GraphWrap component</p>
              <Graph/>
            </>
            )
        }
}
export default GraphWrap

import React from 'react'
import { connect } from 'react-redux'
import {tickOneSecond} from '../actions/dynamicMeeting'

class Meeting extends React.Component {

  state = {
    meeting: false
  }

  handleClick = () => {
      this.setState({meeting: !this.state.meeting})
  }

  timer = () => {
  if(this.state.meeting) {
    this.props.dispatch(tickOneSecond(this.props.staticReducer.costPerSecond))}
  }

  componentDidMount(){
    setInterval(() => {
      this.timer()
    }, 1000)
    
  }
  
  render() {
    return <>
      <div className="container">
        <h2 className="title is-2">{this.props.staticReducer.meetingName}</h2>
      </div>
      <div>
  <h3>TIME ELAPSED: {this.props.dynamic.timeElapsed}</h3>
        <h3>RUNNING TOTAL COST: {this.props.dynamic.currentTotal} </h3>
      </div>
      {/* <button onClick={this.handleClick}>finish</button> */}
      {this.state.meeting ? <button onClick={this.handleClick}>finish</button>: <button onClick={this.handleClick}>Begin</button> }

    </>
  }
}

function mapStateToProps(globalState) {
  return {
    staticReducer: globalState.staticReducer,
    dynamic: globalState.dynamic,
  }
}

export default connect(mapStateToProps)(Meeting)
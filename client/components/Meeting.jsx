import React from 'react'
import { connect } from 'react-redux'
import { tickOneSecond, resetTimer } from '../actions/dynamicMeeting'
import { saveMeeting } from '../apis/meetings'
import { Redirect } from "react-router-dom"

export const timeDisplay = (seconds) => {
  let h = Math.floor(seconds/3600)
  let m = Math.floor((seconds/60) - (Math.floor(seconds/3600) * 60))
  let s = seconds - (Math.floor(seconds/60) * 60)
  return (`${h}`+`:${m}`+`:${s}`)
}


export class Meeting extends React.Component {

  state = {
    meeting: false,
    changer: true,
    redirect: false,
  }

  
  
  handleClick = () => {
    this.setState({ meeting: !this.state.meeting })
  }
  
  handleFinish = () => {
    let meetingData = {
      meeting_name: this.props.staticReducer.meetingName,
      time: this.props.staticReducer.startTime,
      duration: this.props.dynamic.timeElapsed,
      attendees: this.props.staticReducer.attendees.length,
      cost: this.props.dynamic.currentTotal,
    }
    saveMeeting(meetingData)
    .then(
      this.setState({
        redirect: true
      })
      )
    }
    
    timer = () => {
      if (this.state.meeting) {
      this.props.dispatch(tickOneSecond(this.props.staticReducer.costPerSecond))
      this.setState({
        changer: !this.state.changer
      })
    }
  }

  componentDidMount() {
    this.props.dispatch(resetTimer())
    this.setState({
      changer: !this.state.changer
    })

    this.myTimer = setInterval(() => {
      this.timer()
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.myTimer)
  }
  
  render() {
    
    return <>
      <div className="container">
        <h2 className="title is-2">{this.props.staticReducer.meetingName}</h2>
      </div>
      <div>
        <h3>TIME ELAPSED: {timeDisplay(this.props.dynamic.timeElapsed)}</h3>
        <h3>RUNNING TOTAL COST: {Math.round(this.props.dynamic.currentTotal * 100) / 100}</h3>
      </div>
      {this.state.meeting ? <button onClick={this.handleClick}>Pause</button> : <button onClick={this.handleClick}>Start</button>}
      <button onClick={this.handleFinish}>Finish</button>
      {this.state.redirect && <Redirect to="/dashboard" />}
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
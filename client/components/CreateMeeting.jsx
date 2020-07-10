import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { addStaticData } from '../actions/staticActions'


class CreateMeeting extends React.Component {
    state = {
        arr: [],
        meetingName: '',
        name: '',
        hourlyWage: '',
        attendees: [],
        hasSubmitted: false,
        changer: true,
    }
    
    componentDidMount() {
        this.setState({
            arr: [],
            meetingName: '',
            name: '',
            hourlyWage: '',
            attendees: [],
            hasSubmitted: false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cpsCalc = () => {
        let cph = 0
        this.state.attendees.map((element) => {
            cph += Number(element.hourlyWage)
        })
        return cph / 3600
    }

    handleSumbit = (event) => {
        let obj = {
            attendees: this.state.attendees,
            meetingName: this.state.meetingName,
            startTime: new Date().toLocaleString(),
            costPerSecond: this.cpsCalc()
        }
        event.preventDefault()
        this.props.dispatch(addStaticData(obj))
        this.setState({ hasSubmitted: true })

    }

    handleAdd = (event) => {
        event.preventDefault()
        this.state.arr.push({
            name: this.state.name,
            hourlyWage: this.state.hourlyWage,
        })
        this.setState({
            attendees: this.state.arr
        })
        this.setState({
            name: '',
            hourlyWage: '',
        })
        document.getElementById('nameInput').value = ''
        document.getElementById('wageInput').value = ''
    }

    render() {
        return (
            <div className="form">
                <div className="text">
                    <div className="content">
                    <h1>Create your meeting:</h1>
                        <form>
                            <label>Meeting Name:
                                <input onChange={this.handleChange} type="text" name="meetingName" required></input>
                            </label>

                            <h2>Add Attendee:</h2>

                            <label>Name:
                                <input id="nameInput" onChange={this.handleChange} type="text" name="name"></input>
                            </label>

                            <label>Hourly Wage:
                                <input id="wageInput" onChange={this.handleChange} type="number" name="hourlyWage"></input>
                            </label>

                             <button onClick={this.handleAdd}>Add</button>

                            <h2>Current Attendees:</h2>
                            <ul>
                              {this.state.attendees.map((element, i) => {
                                  return <li key={element.name}>Name: {element.name} Hourly Wage: {element.hourlyWage} <button onClick={(event)=> {
                                      event.preventDefault()
                                      this.state.attendees.splice(i, 1)
                                      this.setState({
                                          changer: !this.state.changer
                                      })
                                  }}>Delete</button></li>
                              })}
                            </ul>

                            <input type="submit" value="Create Meeting" onClick={this.handleSumbit}></input>

                        </form>
                        {this.state.hasSubmitted && <Redirect to="/meeting"/>}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(globalState) {
    return {
        staticReducer: globalState.staticReducer,
        dynamic: globalState.dynamic,
    }
}


export default connect(mapStateToProps)(CreateMeeting)
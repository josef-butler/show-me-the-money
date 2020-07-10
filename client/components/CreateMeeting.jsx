import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { addStaticData } from '../actions/staticActions'
import { getDecodedToken } from 'authenticare/client/auth'

class CreateMeeting extends React.Component {
    state = {
        arr: [],
        meetingName: '',
        first_name: '',
        last_name: '',
        hourly_wage: '',
        attendees: [],
        hasSubmitted: false,
        changer: true,
    }
    

    componentDidMount() {
        this.setState({
            arr: [{first_name: getDecodedToken().first_name, 
                last_name: getDecodedToken().last_name, 
                hourly_wage: getDecodedToken().hourly_wage,
            id: getDecodedToken().id}],
            meetingName: '',

            first_name: '',
            last_name: '',
            hourly_wage: '',

            attendees: [{first_name: getDecodedToken().first_name, 
                last_name: getDecodedToken().last_name, 
                hourly_wage: getDecodedToken().hourly_wage,
                id: getDecodedToken().id}],

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
            cph += Number(element.hourly_wage)
        })
        return cph / 3600
    }

    handleSumbit = (event) => {
        let obj = {
            attendees: this.state.attendees,
            meetingName: this.state.meetingName,
            startTime: new Date().toLocaleString(),
            costPerSecond: this.cpsCalc(),
        }
        event.preventDefault()
        this.props.dispatch(addStaticData(obj))
        this.setState({ hasSubmitted: true })

    }

    handleAdd = (event) => {
        event.preventDefault()
        this.state.arr.push({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            hourly_wage: this.state.hourly_wage,
        })
        this.setState({
            attendees: this.state.arr
        })
        this.setState({
            first_name: '',
            last_name: '',
            hourly_wage: '',
        })
        document.getElementById('firstNameInput').value = ''
        document.getElementById('lastNameInput').value = ''
        document.getElementById('wageInput').value = ''
    }

   
    render() {
        return (
            <div className="main-form">
                <div className="text">
                    <div className="content">
                    <h1>Create your meeting:</h1>
                        <form>
                            <label>Meeting Name:
                                <input onChange={this.handleChange} type="text" name="meetingName" required></input>
                            </label>

                            <h2>Add Attendee:</h2>

                            <label>First Name:
                                <input id="firstNameInput" onChange={this.handleChange} type="text" name="first_name"></input>
                            </label>
                            
                            <label> Last Name:
                                <input id="lastNameInput" onChange={this.handleChange} type="text" name="last_name"></input>
                            </label>

                            <label>Hourly Wage:
                                <input id="wageInput" onChange={this.handleChange} type="number" name="hourly_wage"></input>
                            </label>

                             <button onClick={this.handleAdd}>Add</button>

                            <h2>Current Attendees:</h2>
                            <ul>
                              {this.state.attendees.map((element, i) => {
                                  return <li key={element.name}>Name: {element.first_name + ' ' + element.last_name} Hourly Wage: {element.hourly_wage} <button onClick={(event)=> {
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
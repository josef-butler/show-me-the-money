import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { addStaticData } from '../actions/staticActions'
import { getDecodedToken } from 'authenticare/client/auth'

class CreateMeeting extends React.Component {
    state = {
        arr: [],
        meetingName: '',
        name: '',
        hourlyWage: '',
        attendees: [],
        hasSubmitted: false
    }
    

    componentDidMount() {
        this.setState({
            arr: [],
            meetingName: '',
            name: '',
            hourlyWage: '',
            attendees: [{name: (getDecodedToken().first_name + " "+ getDecodedToken().last_name) , hourlyWage: getDecodedToken().hourly_wage}],
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
        return Math.round((cph / 3600)*100)/100
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
            <>
                <h1>Create your meeting:</h1>
                <form>
                    <label>Meeting Name:
                        <input onChange={this.handleChange} type="text" name="meetingName" required></input>
                    </label>

                    <p>Add Attendee:</p>

                    <label>Name:
                        <input id="nameInput" onChange={this.handleChange} type="text" name="name"></input>
                    </label>

                    <label>Hourly Wage:
                        <input id="wageInput" onChange={this.handleChange} type="number" name="hourlyWage"></input>
                    </label>

                    <button onClick={this.handleAdd}>Add</button>

                    <p>Attendees:</p>
                    <ul>
                        {this.state.attendees.map((element) => {
                            return <li key={element.name}>Name: {element.name} Hourly Wage: {element.hourlyWage}</li>
                        })}
                    </ul>

                    <input type="submit" value="Create Meeting" onClick={this.handleSumbit}></input>

                </form>
               
                {this.state.hasSubmitted && <Redirect to="/meeting" />}
            </>
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
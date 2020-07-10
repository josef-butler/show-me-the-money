import React from 'react'
import {connect} from 'react-redux'
import {loginError, registerUserRequest} from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    hourly_wage: '',
    wage: '',
    password: '',
    confirm_password: '',
    select: 'hourly',
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  calculate = (e) => {
    if (this.state.select == 'hourly') {
      this.setState ({
        select: 'hourly',
        wage: e.target.value,
        hourly_wage: e.target.value
      })
    } else {
      this.setState ({
        select: 'annually',
        wage: e.target.value,
        hourly_wage: e.target.value/1600
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let {username, password, confirm_password, first_name, last_name, hourly_wage} = this.state
    if (hourly_wage < 18) window.location.replace("https://www.seek.co.nz/web-developer-jobs-in-information-communication-technology/in-All-Wellington?salaryrange=60000-999999&salarytype=annual");
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({username, password, first_name, last_name, hourly_wage}, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <form className="Register form box" onSubmit={this.handleSubmit}>
        <h1 className="title is-2">Register</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Username
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username}/>
        </label>
        
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">First Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="First Name" type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name}/>
          </label>
          
          <label className="column is-6 label is-large has-text-centered">Last Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name}/>
          </label>
          
          <label className="column is-6 label is-large has-text-centered">Wage
            <select className="scroll" onChange={this.handleChange} name="select">
              <option value="hourly">Hourly</option>
              <option value="annually">Annually</option>
            </select>
          </label>

          <input type="number"  required className="input is-large has-text-centered is-fullwidth" placeholder="Income"  name="hourly_wage" onChange={this.calculate} value={this.state.wage}/>
        
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={this.handleChange} value={this.state.password}/>
          </label>
          
          <label className="column is-6 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.handleChange} value={this.state.confirm_password}/>
          </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)

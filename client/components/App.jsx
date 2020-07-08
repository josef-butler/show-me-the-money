
import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'


import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'
import Dashboard from './Dashboard'
import CreateMeeting from './CreateMeeting'


import { checkAuth } from '../actions/auth'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => {}
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render() {
    const { auth } = this.props
    return (
      <Router>
        <div className="container has-text-centered">
          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to="/" className="">
                <h1 className="title is-1">$how Me The Money</h1>
              </Link>
              <Nav />
            </div>
          </div>

          <div className="">
            {!auth.isAuthenticated && (
              <Route exact path="/" component={Login} />

            }
            <Route path="/create" component={CreateMeeting}/>

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/meeting" component={Meeting} />
            <Route path="/history" component={History} />
            <Route path="/create" component={CreateMeeting} />
            <Route path="/graph" component={Graph} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(App)

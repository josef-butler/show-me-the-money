
import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {checkAuth} from '../actions/auth'


import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'

import { checkAuth } from '../actions/auth'
import GraphWrap from './GraphWrap'

import CreateMeeting from './CreateMeeting'



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

          <GraphWrap/>
          <div className=''>
            {!auth.isAuthenticated &&
 <Route exact path="/" component={Login} />
            }


            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/dashboard' component={Dashboard} />

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

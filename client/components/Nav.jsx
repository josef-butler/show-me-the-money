import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'

class Nav extends React.Component {
  state = {
    showBurger: false,
  }

  toggleBurger = () => {
    this.setState({
      showBurger: !this.state.showBurger
    })
  }

  render() {
    const {auth, logout} = this.props
    const {showBurger} = this.state
    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span onClick={this.toggleBurger} className={`navbar-burger burger ${showBurger ? 'is-active': ''}`} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${showBurger ? "is-active" : ''}`}>
          <div className="navbar-end">
             {auth.isAuthenticated
              ? (
                <>
                  <Link to='/dashboard' className="navbar-item is-large" onClick={this.toggleBurger}>Dashboard</Link>
                  <Link to='/create' className="navbar-item is-large" onClick={this.toggleBurger}>Create Meeting</Link>
                  <Link to='/' className="navbar-item is-large" onClick={() => {logout(); this.toggleBurger()}}>Logout</Link>
                </>
                )
              : (
                <>
                  <Link onClick={this.toggleBurger} className="navbar-item is-large" to='/login'>Login</Link>
                  <Link onClick={this.toggleBurger} className="navbar-item" to='/register'>Register</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

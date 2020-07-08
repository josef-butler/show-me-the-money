import React from 'react'
import {connect} from 'react-redux'

function Meeting (props) {
  return <div className="container">
    <h2 className="title is-2">Start Meeting</h2>
  </div>
}

function mapStateToProps(globalState) {
  return {
      toDos: globalState.toDos,
  }
}

export default connect(mapStateToProps)(Meeting)

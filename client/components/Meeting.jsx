import React from 'react'
import {connect} from 'react-redux'

function Meeting (props) {
  // const attendees = [{
  //   name: 'Lawrence',
  //   hourly: 24,
  // }, {
  //   name: 'Gilbert',
  //   hourly: 28,
  // }, {
  //   name: 'Ruth',
  //   hourly: 30.60,
  // }]
  
  // function cpsCalc() {
  //   let cph = 0
  //   attendees.map((element) => {
  //     cph += element.hourly
  //   })
  //   return cph/3600
  // }

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
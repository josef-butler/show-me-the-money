const express = require('express')
const router = express.Router()

const db = require('../../db/meetings')
const attendeesDb = require('../../db/attendees')

const {getTokenDecoder} = require('authenticare/server')


//localhost:3000/api/v1/meetings/
router.get("/", getTokenDecoder(), (req, res) => {
    db.getMeetingHistory(req.user)
    .then( data =>{
        res.json(data) 
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})

router.get("/:id/users", (req, res) => {
    console.log("getmeeting attendees recived ", req.body)
    db.getMeetingAttendees(req.params.id)
    .then(data=>{
        res.json( {data})
        
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})

//database responds with the id of the post created
//should respond with The Meeting that has been saved in db read format???????
router.post("/", getTokenDecoder(), (req, res) => {
    console.log("create meeting recived ", req.body)
    let userId = req.user.id
    db.saveMeeting(req.body)
    .then(meetingId=>{
        let data = {
            meeting_id: meetingId,
            user_id: userId
        }
        attendeesDb.saveAttendees(data)
        .then(meetingId => {
            res.json(meetingId)
        })
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})

router.get("/all", (req, res) => {
    console.log("get All Meetings recived ")
    db.getAllMeetings()
    .then(data=>{
        res.json({data})
        
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})
module.exports = router



const express = require('express')
const router = express.Router()

const db = require('../../db/meetings')
const attendeesDb = require('../../db/attendees')
const usersDb = require('../../db/users')

const { getTokenDecoder } = require('authenticare/server')


//localhost:3000/api/v1/meetings/

router.get("/", getTokenDecoder(), (req, res) => {

    console.log("getmeeting history request recived from client")
    db.getMeetingHistory(req.user)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).send("it broke :/")
            console.log(err)
        })
})

router.get("/:id/users", (req, res) => {
    console.log("getmeeting attendees recived ", req.body)
    db.getMeetingAttendees(req.params.id)
        .then(data => {
            console.log(data)
            res.json({ data })

        })
        .catch(err => {
            res.status(500).send("it broke :/")
            console.log(err)
        })
})

//database responds with the id of the post created
//should respond with The Meeting that has been saved in db read format???????
router.post("/", getTokenDecoder(), (req, res) => {
    console.log("create meeting recived ", req.body)
    let meetingCreatorId = req.user.id

    db.saveMeeting(req.body.meetingData)
        .then(meetingId => {
            let newMeetingId = meetingId

            for (let i = 0; i < req.body.attendeesData.length; i++) {
                let user = req.body.attendeesData[i]
                usersDb.createUnregisteredUser(user)
                    .then((userId) => {
                        let userObj = {
                            meeting_id: newMeetingId,
                            user_id: userId
                        }
                        attendeesDb.saveAttendees(userObj)
                            .then(() => console.log("yay"))
                    })
            }
            
            attendeesDb.saveAttendees({
                meeting_id: newMeetingId,
                user_id: meetingCreatorId
            })
        })
        .catch(err => {
            res.status(500).send("it broke :/")
            console.log(err)
        })
})

router.get("/all", (req, res) => {
    console.log("get All Meetings recived ")
    db.getAllMeetings()
        .then(data => {
            console.log(data)
            res.json({ data })

        })
        .catch(err => {
            res.status(500).send("it broke :/")
            console.log(err)
        })
})
module.exports = router



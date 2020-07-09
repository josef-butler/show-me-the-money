const express = require('express')
const router = express.Router()

const db = require('../../db/meetings')



router.get("/", (req, res) => {
    db.getMeetingHistory()
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
        console.log(data)
        res.json( {data})
        
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})

//database responds with the id of the post created
//should respond with The Meeting that has been saved in db read format???????
router.post("/", (req, res) => {
    console.log("create meeting recived ", req.body)
    db.saveMeeting(req.body)
    .then(data=>{
        console.log(data)
        res.json( {data})
    })
    .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
    })
})


module.exports = router



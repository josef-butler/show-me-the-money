const express = require('express')

const authRoutes = require('./routes/auth')
const users = require('./routes/api/users')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1', authRoutes)
 server.use('/api/v1/users', users)

module.exports = server

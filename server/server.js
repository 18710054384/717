const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const app = express()
app.use(bodyParser.json())
let api = require('./api.js')

api(app)

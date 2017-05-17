'use strict'

var dotenv = require('dotenv').config()
var path = require('path')
var secretService = require(path.join(__dirname, 'index.js')).secretService

secretService.start(function (err, message) {
  console.log(message)
})

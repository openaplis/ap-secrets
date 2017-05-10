'use strict'

const path = require('path')
const fs = require('fs')

const mysqlConfigPath = path.join(__dirname, '../../secrets/mysql-config.js')
var mysqlConfig = null

module.exports.get =

  function (callback) {
    if(mysqlConfig == null) {
      fs.exists(mysqlConfigPath, function (exists) {
        if(exists) {
          mysqlConfig = require(mysqlConfigPath)
          callback(null, mysqlConfig)
        } else {
          callback({ error: 'The config file does not exist' })
        }
      })
    } else {
      callback(null, mysqlConfig)
    }
  }

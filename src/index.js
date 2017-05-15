'use strict'

const dotnv = require('dotenv').config()
const path = require('path')
const secretClient = require('./core/secret-client')
const secretService = require('./core/secret-service')
const mysqlConfig = require('./core/mysql-config')

module.exports = {
  secretClient: secretClient,
  secretService: secretService,
  mysqlConfig: mysqlConfig
}

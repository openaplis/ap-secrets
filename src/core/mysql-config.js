'use strict'

module.exports.get = function (callback) {

  if(process.env.DB_HOST == null) return callback({ error: 'DB_HOST environment variable cannot be null' })
  if(process.env.DB_USER == null) return callback({ error: 'DB_USER environment variable cannot be null' })
  if(process.env.DB_PASS == null) return callback({ error: 'DB_PASS environment variable cannot be null' })
  if(process.env.DB_DATABASE == null) return callback({ error: 'DB_DATABASE environment variable cannot be null' })

  var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
  }

  callback(null, config)
}

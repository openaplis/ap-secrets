'use strict'

const path = require('path')
const grpc = require('grpc')

var PROTO_PATH = path.join(__dirname, 'secret.proto')

const secret_proto = grpc.load(PROTO_PATH).secret
const ping = new secret_proto.SecretService('localhost:50050', grpc.credentials.createInsecure())
const mysqlConfig = new secret_proto.MysqlConfigService('localhost:50050', grpc.credentials.createInsecure())

module.exports = {

  ping: function (message, callback) {
    ping.ping(message, function(err, response) {
      if(err) return callback(err)
      callback(null, response)
    })
  },

  getMysqlConfig: function (apiKey, callback) {
    mysqlConfig.get(apiKey, function(err, config) {
      if(err) return callback(err)
      callback(null, config)
    })
  }

}

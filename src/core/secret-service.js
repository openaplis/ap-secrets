var grpc = require('grpc')
var path = require('path')

var PROTO_PATH = path.join(__dirname, 'secret.proto')
var protobuf = grpc.load(PROTO_PATH).secret
var server = {};

var mysqlConfig = require(path.join(__dirname, 'mysql-config'))

module.exports = {

  start: function (callback) {
    server = new grpc.Server()
    server.addService(protobuf.SecretService.service, { ping: ping })
    server.addService(protobuf.MysqlConfigService.service, { get: getMysqlConfig })

    server.bind("0.0.0.0:50050", grpc.ServerCredentials.createInsecure())
    server.start()

    callback(null, {
      message: 'The Secret service has started.',
      port: "50050"
    })
  },

  shutdown: function (callback) {
    server.tryShutdown(function () {
      callback(null, { message: 'The service has been stopped.'} )
    })
  }

}

function getMysqlConfig(call, callback) {
  mysqlConfig.get(function (err, config) {
    if(err) return callback(err)
    callback(null, config)    
  })
}

function ping (call, callback) {
  callback(null, { message: 'I recieved this message: ' + call.request.message } )
}

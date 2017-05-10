var path = require('path')
var secretClient = require('../src/index').secretClient

secretClient.getMysqlConfig({ apiKey: '123123123' }, function (err, response) {
  if(err) return console.log(err)
  console.log(response)
})

const fs = require('fs')
const Base64 = require('js-base64').Base64
const config = require('./mssql-config.js')

var json64 = Base64.encode(JSON.stringify(config))

fs.writeFile('./etc/secrets/mssql-config', json64, (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})

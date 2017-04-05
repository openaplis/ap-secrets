const fs = require('fs')
const Base64 = require('js-base64').Base64
const path = require('path')

const config = require(path.resolve('./secrets/mysql-config/mysqlConfig.js'))

var json64 = Base64.encode(JSON.stringify(config))

fs.writeFile(path.resolve('./secrets/mysql-config/mysqlConfig'), json64, (err) => {
  if (err) throw err
  console.log('The secret has been encoded.')
})

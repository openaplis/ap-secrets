const localMysqlConfig = require('../secrets/mssqlConfig/mssqlConfig')
const clusterMysqlConfigPath = '/etc/secrets/mssqlConfig'

module.exports.mysqlConfig = (callback) => {
  if(process.env.NODE_ENV.trim() == 'DEV') {
    callback(null, localMysqlConfig)
  } else if(process.env.NODE_ENV.trim() == 'PROD') {
    fs.readFile(clusterMysqlConfigPath, 'utf8', function(err, data) {
        if (err) throw err
        callback(null, JSON.parse(data))
    })
  } else {
    return callback(new Error('The specified environment is not supported.'))
  }
}

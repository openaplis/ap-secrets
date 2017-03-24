const localMSSQLConfig = require('../secrets/mssql-config/mssql-config')
const clusterMSSQLConfigPath = '/etc/secrets/mssql-config'

module.exports.mssqlConfig = (callback) => {
  if(process.env.NODE_ENV.trim() == 'DEV') {
    callback(null, localMSSQLConfig)
  } else if(process.env.NODE_ENV.trim() == 'PROD') {
    fs.readFile('/etc/secrets/mssql-config', 'utf8', function(err, data) {
        if (err) throw err
        callback(null, JSON.parse(data))
    })
  } else {
    return callback(new Error('The specified environment is not supported.'))
  }
}

'use strict'

const assert = require('chai').assert
const mysqlConfig = require('../src/index').mysqlConfig

describe('mysql config tests', function() {

  it('Is the config returned?', function(done) {
    mysqlConfig.get(function (err, config) {
      if(err) console.log(err)
      assert.isNotNull(config.host)
      done()
    })
  })

})

module.exports = {
    user: 'sa',
    password: 'p0046ep0046e',
    server: '10.1.2.200',
    database: 'ypidata',
    stream: true,
    options: {
        encrypt: false
    },

    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 1000
    }
}

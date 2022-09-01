const sql = require('mssql/msnodesqlv8')
const config = require('./db_config')

const connection_db = ()=>{
    sql.connect(config, function (err) {
        if (err) {
          console.log({ message: 'DB connections fail', error: err })
        } else {
          console.log('DB connection success')
        }
      })
} 

module.exports = connection_db

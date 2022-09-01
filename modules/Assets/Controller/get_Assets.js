const sql = require('mssql/msnodesqlv8')
const { catch_Error } = require('../../../utiles/catch_error')

exports.get_All_Assets = async (req , res) => {
  try {
    var Request = new sql.Request()
    Request.query('SELECT * FROM Assets_table', function (err, Asset) {
      if (err) {
        console.log(err)
        res.status(400).json({ message: 'Invalid query' })
      } else {
        res.status(200).json({ message: 'all assets : ', Assets_Group: Asset })
      }
    })
  } catch (error) {
    catch_Error(res,error)
  }
}

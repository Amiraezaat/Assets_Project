const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()
const Assets_Router = require("./modules/Assets/Asset.Routes")
const connection_db = require('./DB_Config/DB_Connection')
const port = process.env.PORT

app.use(express.json())  //
app.use(cors()) //
app.use(Assets_Router) //
connection_db() //

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening on port ${port}!`))
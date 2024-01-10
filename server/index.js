const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const port = 3001

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", require("./routes/route"))

app.listen(port, console.log(`the server is running on the port ${port}`))
const express = require('express')
require("./db/conn")
const router=require("./routers/menrouter")
const MensRanking = require("./models/mens")
const app = express()

const port = 3000


app.use(express.json())
app.use(router);
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

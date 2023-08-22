const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const path = require("path")


const CategoryRouter = require('./API/Category/Router')
const BrandRouter = require('./API/Brands/Router')
const UserRouter = require('./API/User/Router')
const productRouter = require('./API/Products/Router')
const orderRouter = require('./API/order/Router')

const port = process.env.SERVER_PORT || 3200
app.use("/",express.static(path.join(__dirname,"./client/dist")))
app.use(express.json())
app.use(cors(
  // {
  //     origin: "http://localhost:5173",
  //     credentials: "true"
  // }
))
app.use('/api', CategoryRouter)
app.use('/api', BrandRouter)
app.use('/api', UserRouter)
app.use('/api', productRouter)
app.use('/api', orderRouter)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,"./client/dist/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
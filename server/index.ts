const express = require("express")
const receiveItemRouter = require("./routes/item.routes")
const receiveUserRouter = require("./routes/user.routes")
const receiveCartRouter = require("./routes/cart.routes")
var cors = require("cors")


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/item", receiveItemRouter)
app.use("/api/user", receiveUserRouter)
app.use("/api/cart", receiveCartRouter)

app.listen(PORT, console.log(`Web server is working on port ${PORT}`))




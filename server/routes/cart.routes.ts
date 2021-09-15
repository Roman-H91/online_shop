const CartRouter = require("express")
const cartRouter = new CartRouter()
const cartController = require("../controller/cart.controller")

cartRouter.post("/", cartController.createCart)
cartRouter.get("/", cartController.getCart)
cartRouter.delete("/:id", cartController.deleteOrder)

module.exports = cartRouter
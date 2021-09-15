const ItemRouter = require("express")
const itemRouter = new ItemRouter()
const itemController = require("../controller/item.controller")

itemRouter.post("/", itemController.createItem)
itemRouter.get("/", itemController.getItems)
itemRouter.get("/:id", itemController.getOneItem)
itemRouter.put("/:id", itemController.updateItem)
itemRouter.delete("/:id", itemController.deleteItem)

module.exports = itemRouter
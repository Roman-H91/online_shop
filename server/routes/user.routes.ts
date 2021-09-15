const UserRouter = require("express")
const userRouter = new UserRouter()
const userController = require("../controller/user.controller")

userRouter.post("/", userController.createUser)
userRouter.get("/", userController.getUsers)
userRouter.put("/", userController.updateUser)
userRouter.delete("/:id", userController.deleteUser)

module.exports = userRouter
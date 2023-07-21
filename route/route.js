const route = require("express").Router()
const middleware = require("../middleware/middlewareUser")
const controller = require("../controller/controllerUser")
route.post("/custom", middleware.info, controller.custom)
module.exports = route
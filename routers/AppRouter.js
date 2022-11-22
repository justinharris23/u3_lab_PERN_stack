const Router = require("express").Router()
const MovieRouter = require("./MovieRouter")
// const ActorRouter = require("./ActorRouter")

Router.use("/movie", MovieRouter)
// Router.use("/actor", ActorRouter)

module.exports = Router

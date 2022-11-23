const Router = require("express").Router()
const ActorRouter = require("./ActorRouter")
// const DirectorRouter = require("./DirectorRouter")
// const MovieRouter = require("./MovieRouter")

Router.use("/actors", ActorRouter)
// Router.use("/director", DirectorRouter)
// Router.use("/movie", MovieRouter)

module.exports = Router

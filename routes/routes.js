const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()
  
routes.get("/produto",controller.getAllProduto)
routes.get("/produto/:id",controller.getProdutoById)
routes.post("produto",controller.createProduto)
routes.put("/produto/:id",controller.updateProduto)
routes.delete("/produto/:id",controller.deleteProduto)

module.exports = routes
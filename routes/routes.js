const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()
  
routes.get("/",controller.getAllProduto)
routes.get("/:id",controller.getProdutoById)
routes.post("/",controller.createProduto)
routes.put("/:id",controller.updateProduto)
routes.delete("/:id",controller.deleteProduto)

module.exports = routes
var path = require('path');

const controller = {}

let indice = 15

var lista = [
{ 
"id": 1, 
"descricao": "Camiseta", 
"preco": 29.99, 
"cores": ["preto", "branco", "cinza"]
},
{
"id": 2,
"descricao": "Calça Jeans",
"preco": 79.99,
"cores": ["azul claro", "azul escuro"]
},
{
"id": 3,
"descricao": "Tênis Esportivo",
"preco": 149.99,
"cores": ["preto", "branco", "cinza", "azul"]
},
{
"id": 4,
"descricao": "Jaqueta de Couro",
"preco": 99.99,
"cores": ["preto", "marrom"]
}
]

controller.getAllProduto = (req,res)=>{
    res.status(200).send(lista)
}

controller.getProdutoById = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
  
    if(item){
      res.status(200).send(item)
    } else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
  }

controller.createProduto = (req,res)=>{
    const novoProduto = req.body
    novoProduto.id = indice + 1
    lista.push(novoProduto)
    res.status(200).redirect("/pessoas")
}

controller.updateProduto = (req,res)=>{
    produtoIndice = lista.findIndex(p => p.id == req.params.id)
    console.log(produtoIndice)
    if(produtoIndice >= 0){
      const produtoAtualizado = req.body;
      lista[produtoIndice] = produtoAtualizado;
      res.status(200).send("OK")
    }else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
}

controller.deleteProduto = (req,res)=>{
  const produtoIndice = lista.findIndex(p => p.id == req.params.id);
  if (produtoIndice >= 0) {
    lista.splice(produtoIndice, 1);
    res.status(200).send("OK")
  }else{
    res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
  }
}

module.exports = controller
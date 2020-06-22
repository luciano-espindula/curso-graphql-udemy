module.exports = {
    precoComDesconto(produto) {
        if (produto.desconto != null) {  //(produto.esconto)
            //return produto.preco - ((produto.desconto / 100) * produto.preco)
            return produto.preco * ((100 - produto.desconto) / 100)
        } else {
            return produto.preco
        }
    }
}
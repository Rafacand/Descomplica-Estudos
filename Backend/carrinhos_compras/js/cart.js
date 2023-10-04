let carrinho = [];

function start() {
    fetch('https://fakestoreapi.com/products?limit=10')
        .then(response => response.json())
        .then(data => {
            preencherCarrinho(data);
        })
        .catch(error => {
            console.log("Ocorreu um erro :", error)
        });
}


function preencherCarrinho(produtos) {
    produtos.forEach(data => {
        adicionarAoCarrinho(
            data.title,
            data.image,
            data.description,
            data.price);
    });

    atualizarCarrinho();
}

function adicionarAoCarrinho(nome, imgLink, descricao, preco) {
    carrinho.push({
        "nome": nome,
        "imgLink": imgLink,
        "descricao": descricao,
        "preco": Number.parseFloat(preco),
        "quantidade": 0,
        "total": 0.0
    })
}

function atualizarCarrinho() {
    let carrinhoHTML = document.getElementById("carrinho");
    carrinhoHTML.innerHTML += `<div id="qtd_items" class="font-weight-normal">${carrinho.length} items</div>`
    carrinho.forEach((produto, index) => {
        carrinhoHTML.innerHTML +=
       `
       <div id='produto${index}' class='d-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pt-2 pb-3 border-botton mobile'>
                <div class='d-flex flex-row align-items-center'>
                    <div>
                            <img src= '${produto.imgLink}'
                            width = '150' height = '150'
                            id='image'/>
                    </div>
                    <div class='d-flex flex-column pl-md-4 pl-1'>
                            <div><h6>${produto.nome}</h6></div>
                    </div>

                </div>
                <div class='pl-md-2 pl-1'><b>R$${produto.preco.toFixed(2)}</b></div>
                    <span
                        class='fa fa-minus-square text-secondary'
                        onclick='removeItem(${index})'>
                    </span>
                    <span class='px-md-3 px-1' id='quantidade${index}'>
                        ${produto.quantidade}
                    </span>
                    <span class='fa fa-plus-square text-secondary'
                    onclick='adicionarItem(${index})'>
                    </span>
                    <div class='close' onclick='removeProduto(${index})'>&times;
                </div>
        </div>`
    })

}

function adicionarItem(item) {
    console.log(item)
    let qtd = document.getElementById('quantidade' + item)
    let produto = carrinho[item]
    produto.quantidade += 1;
    qtd.innerHTML = produto.quantidade;
    atualizaNumerosTela(qtd, item)
}

function removeItem(item) {
    let qtd = document.getElementById('quantidade' + item)
    let produto = carrinho[item]
    if (produto.quantidade > 0) {
        produto.quantidade -= 1;
        qtd.innerHTML = produto.quantidade;
        atualizaNumerosTela(qtd, item)
    }
}

function atualizaNumerosTela(qtd, item) {
    qtd.innerHTML = carrinho[item].quantidade;
    atualizaTotalProduto(item);
    atualizaQtdItems();
    atualizaSubTotal();
}

function atualizaTotalProduto(item) {
    total = document.getElementById('total' + item)
    let produto = carrinho[item]
    produto.total = Number.parseFloat(
        produto.quantidade * produto.preco
    )
    produto.innerHTML = produto.total.toFixed(2);
}

function atualizaSubTotal() {
    let totalCompra = document.getElementById('valorTotalCompra');
    let subtotal = 0
    carrinho.forEach(produto => {
        subtotal += produto.quantidade * produto.preco
    })
    totalCompra.innerHTML = subtotal.toFixed(2)
}

function removeProduto(item) {
    let carrinhoHTML = document.getElementById('carrinho');
    let produto = document.getElementById('produto' + item);

    if (confirm("Você tem certeza quie deseja excluir o produto ?")) {
        carrinho[item].quantidade = 0;
        atualizaSubTotal()
        carrinhoHTML.removeChild(produto)
    }

}

function atualizaQtdItems(){
    let totalItems = document.getElementById('qtd_Items');
    let Unitems = 0
    carrinho.forEach(produto => {
        Unitems += produto.quantidade
    })
    totalItems.innerHTML = Unitems
}
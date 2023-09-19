let carrinho = [];

function start(){
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => Response.json())
    .then(data => {
        preencherCarrinho(data);
        })
        .catch(error => console.log("Ocorreu um erro :", error))
}


function preencherCarrinho(produtos){
    produtos.foreach(data =>{
        adicionarCarrinho(
            data.title,
            data.image,
            data.description,
            data.pric
        )
    });

    atualizarCarrinho();
}

function adicionarCarrinho(nome,imgLink,descricao,preco){
    carrinho.push({
        "nome" : nome,
        "imgLink" : imgLink,
        "descricao" : descricao,
        "preco" : Number.parseFloat(preco),
        "quantidade" : 0,
        "total" : 0.0
    })
}

function atualizarCarrinho(){
    let carrinhoHTML = document.getElementById("carrinho");

    carrinho.foreach((produto,index) =>{
`<div>
id ='produto${index}'
class = 'd-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pt-2 pb-3 border-botton mobile'
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
        <div class='pl-md-2 pl-1'>
            <b>R$ ${produto.price}</b>
        </div>
        <div class='pl-md-3 pl-2'>
            <span class='fa fa-mi-square text-secondary' onclick='removeItem(${index})'> </span>
            <span class='px-md-3 px-1' id='quantidade${index}' onclick='adicionarItem(${index})'>
            ${produto.quantidade}
            </span>
        </div>
        <div class='pl-md-0 pl-1'>
            <b>R$ <span id='total${index}'>0</span></b>
        </div>
        <div class='close' onclick='removePRoduto(${index}'>
        </div>
</div>`
    })

}

function adicionarItem(item){
    let qtd = document.getElementById('quantidade' + item)
    let produto = carrinho[item]
    produto.quantidade += 1;
    qtd.innerHTML = produto.quantidade;

}
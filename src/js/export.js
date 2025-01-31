function toJSON(cartao){
    const dados = cartao.getElementsByClassName("informacoes-ataque")[0];
    let ataque = 0;
    let defesa = 0;
    for (const linha of dados.children){
        let info = linha.innerText.split('/');
        if (info[0] == "ATK") ataque = info[1];
        if (info[0] == "DEF") defesa = info[1];
    }
    return {
        nome: cartao.getElementsByClassName("nome")[0].innerHTML,
        nivel: cartao.getElementsByClassName("estrela").length,
        imagem: cartao.getElementsByClassName("imagem-carta")[0].getAttribute("src"),
        descricao: cartao.getElementsByClassName("descricao")[0].innerHTML,
        ataque: ataque,
        defesa: defesa
    };
}

let lista = document.getElementsByClassName("cartao");
let result = {"cartas":[]};
for (const cartao of lista){
    result["cartas"].push(toJSON(cartao));
}
document.getElementById("export").innerHTML=JSON.stringify(result);
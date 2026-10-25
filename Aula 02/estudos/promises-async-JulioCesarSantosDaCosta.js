    async function mostrarProduto() {
    try {
        const produto = await buscarProduto(3);
        console.log(produto);
    } catch (erro) {
        console.log(erro);
    }
}

function buscarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({
                    id,
                    nome: "Produto " + id
                });
            } else {
                reject("ID inválido");
            }
        }, 1000);
    });
}

async function carregarDados() {
    try {
        const resposta = await fetch("https://exemplo.com/api");
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}

async function carregar() {
    try {
        const resposta = await fetch("https://exemplo.com/api");
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}
// 1
// uma promise e um objeto do javascript que representa um valor que ainda vai chegar no futuro

// 2
// pending fulfilled e rejected

// 3
async function pegarproduto() {
  try {
    const produto = await buscarproduto(3)
    console.log(produto)
  } catch (erro) {
    console.log(erro)
  }
}

// 4
// ele pausa so a funcao onde ele esta rodando e o resto da pagina continua funcionando

// 5
// porque o javascript so aceita a palavra await se a funcao foi declarada com async na frente

// 6
async function buscarproduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "produto " + id })
    }, 1000)
  })
}

// 7
// a funcao carregardados nao tem a palavra async antes de function entao nao pode usar await dentro dela

// 8
async function carregar() {
  const resposta = await fetch("https://exemplo.com/api")
  const dados = await resposta.json()
  console.log(dados)
}

// 9
// sem internet a requisicao nem chega no servidor e da erro direto mas se o servidor responde 404 a comunicacao funcionou entao o fetch nao considera erro de rede

// 10
// porque o map nao sabe esperar promises ele dispara todas de uma vez e devolve um array com varias promises pendentes em vez de esperar cada uma terminar
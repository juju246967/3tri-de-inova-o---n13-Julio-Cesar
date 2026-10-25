// 1
const nums = [1, 2, 3, 4];
const dobro = nums.map((n) => n * 2);

// 2
const pares = nums.filter((n) => n % 2 === 0);

// 3 - o map faz todos os itens do vetor manter o mesmo tamanho, enquanto o filter filtra apenas os itens que passam em uma condição

// 4
const p = { titulo: "caneca", preco: 25 };
const { titulo, preco } = p;

// 5
const ehCaro = (numero) => numero > 100;

// 6
const cores = ["azul", "verde"];
const cores2 = [...cores, "vermelho"];

// 7
const pEmPromocao = { ...p, preco: 20 };

// 8
const produtos = [
  { nome: "caneca", estoque: 3 },
  { nome: "camiseta", estoque: 0 },
  { nome: "adesivo", estoque: 7 }
];
const nomesEmEstoque = produtos.filter((p) => p.estoque > 0).map((p) => p.nome);

// 9 - como foi usado chaves no corpo da função de seta, o JavaScript exige um return, por isso que vai voltar undefined

// 10 - a primeira forma que é sem chaves importa uma exportação padrão (export default), enquanto a segunda forma com chaves importa uma exportação nomeada

// 11 - o push altera o vetor original direto em vez de criar um novo, o que faz com que o React não detecte a alteração no estado

// 12
const nomesEstoqueMaiorQue5 = produtos.filter((p) => p.estoque > 5).map((p) => p.nome);
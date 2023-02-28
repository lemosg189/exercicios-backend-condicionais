//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 100;

let valorComDesconto = 0;

if (tipoDePagamento === "credito") {
    valorComDesconto = valorDoProduto * 0.95;
    console.log(`O valor a pagar é de ${valorComDesconto.toFixed(2)}`)

} else if (tipoDePagamento === "cheque") {
    valorComDesconto = valorDoProduto * 0.97;
    console.log(`O valor a pagar é de ${valorComDesconto.toFixed(2)}`)

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    valorComDesconto = valorDoProduto * 0.90;
    console.log(`O valor a pagar é de ${valorComDesconto.toFixed(2)}`)

} 
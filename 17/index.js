//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 11;

//valor pago
const valorPago = 100;

let valorAPagar = valorDoProduto - valorPago;
let valorAPagarComParcelamento = (valorDoProduto - valorPago) / quantidadeDoParcelamento;

if (valorPago >= valorDoProduto) {
    console.log("Pago!");

} else if (valorDoProduto != valorPago && quantidadeDoParcelamento === 1) {
    console.log(valorAPagar)

} else if (valorDoProduto != valorPago && quantidadeDoParcelamento != 1) {
    console.log(`Restam ${quantidadeDoParcelamento} parcelas de R$${valorAPagarComParcelamento.toFixed(2)}`);

}
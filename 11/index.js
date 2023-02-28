//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 16000;


let rendaMensalEmReais = rendaMensalEmCentavos / 100;
let totalJaPagoPeloAlunoReais = totalJaPagoPeloAluno / 100;


let valorAPagar = rendaMensalEmReais * 0.18;
totalJaPagoPeloAlunoReais <= 18000;
valorAPagar <= 18000;

if (rendaMensalEmReais <= 2000 || mesesDecorridos >= 60 || totalJaPagoPeloAlunoReais >= 18000) {
    console.log("Não paga nada");

} else if (totalJaPagoPeloAlunoReais >= 18000) {
    console.log("Quitado");

} else if (totalJaPagoPeloAlunoReais <= 18000) {

}


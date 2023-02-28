const jogada1 = "papel"
const jogada2 = "papel"

//seu código aqui

if (jogada1 === 'pedra' && jogada2 === 'tesoura') {
    console.log(jogada1);

} else if (jogada1 === 'pedra' && jogada2 === 'papel') {
    console.log(jogada2);

} else if (jogada1 === 'tesoura' && jogada2 === 'papel') {
    console.log(jogada1);

} else if (jogada1 === 'tesoura' && jogada2 === 'pedra') {
    console.log(jogada2);

} else if (jogada1 === 'papel' && jogada2 === 'tesoura') {
    console.log(jogada2);

} else if (jogada1 === 'papel' && jogada2 === 'pedra') {
    console.log(jogada1);

} else {
    (jogada1 === jogada2)
    console.log('empate');

}

const caractere = '3';

if (typeof caractere === "number") {
    console.log("Número")

} else if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    console.log("Vogal minúscula");

} else if (caractere === 'A' || caractere === 'E' || caractere === 'I' || caractere === 'O' || caractere === 'U') {
    console.log("Vogal Maiusculas");

} else {
    console.log("Consoante");

}





// Faça um programa que identifica caracteres.
//Seu programa deverá classificar este único caractere,
//que estará guardado numa variável, em uma das categorias abaixo:
//Seu programa deverá dizer qual a categoria do caractere. Caso a categoria seja Vogal,
//seu programa deverá ainda informar se a vogal é maiúscula ou minúscula.


//let vogal = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
//let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//if (caractere === vogal);
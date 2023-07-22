/**
 * Retourner le nombre en inverse.
 * 
 */

const nbr1 = 0; // 0
const nbr2 = 1990; // 991
const nbr3 = 12345; // 54321

function reverseNombre(nbr){
    return +nbr.toString().split('').reverse().join('');
}

// Tests
reverseNombre(nbr1);
reverseNombre(nbr2);
reverseNombre(nbr3);
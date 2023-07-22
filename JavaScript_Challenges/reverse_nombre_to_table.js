/**
 * Retourner un tableau contenant les éléments du nombre renversés.
 * 
 */

const nbr1 = 0; // [0]
const nbr2 = 1990; // [0, 9, 9, 1]
const nbr3 = 12345; // [5, 4, 3, 2, 1]

function reverseNombre(nbr){
    return nbr.toString().split('').reverse().map(Number);
}

// Tests
reverseNombre(nbr1);
reverseNombre(nbr2);
reverseNombre(nbr3);
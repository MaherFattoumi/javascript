/**
 * Retourner la somme des éléments qui sont des nombres, dans un tableau, sans utiliser les boucles.
 * 
 */

const tab1 = [1, "Maher", 2, true]; // 3
const tab2 = [1, 2, 5, true, false, "zozo", 5, "toto"]; // 13
const tab3 = [true, false]; // 0

function sumOfNumbers(tab){
    return tab.filter(elem => Number.isInteger(elem))
              .reduce((sum, elem) => sum + elem, 0);
}

// Tests
sumOfNumbers(tab1);
sumOfNumbers(tab2);
sumOfNumbers(tab3);
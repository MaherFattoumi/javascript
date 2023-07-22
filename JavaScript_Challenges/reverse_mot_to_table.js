/**
 * Retourner le mot ecrit en inverse.
 * 
 */

const mot1 = ""; // []
const mot2 = "a"; // ["a"]
const mot3 = "ab"; // ["b", "a"]
const mot4 = "abbacdef"; // ["f", "e", "d", "c", "a", "b", "b", "a"]

function reverseMot(mot){
    return mot.split('').reverse();
}

// Tests
reverseMot(mot1);
reverseMot(mot2);
reverseMot(mot3);
reverseMot(mot4);
/**
 * Retourner le mot ecrit en inverse.
 * 
 */

const mot1 = ""; // ""
const mot2 = "a"; // "a"
const mot3 = "ab"; // "ba"
const mot4 = "abbacdef"; // "fedcabba"

function reverseMot(mot){
    return mot.split('').reverse().join('');
}

// Tests
reverseMot(mot1);
reverseMot(mot2);
reverseMot(mot3);
reverseMot(mot4);
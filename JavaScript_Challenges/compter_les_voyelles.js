/**
 * Retourner le nombre des voyelles dans une chaîne de caractères.
 * 
 * 'z' => 0
 * 'a' => 1
 * 'abc' => 1
 * 'Hello word' => 3
 * 
 */

function countVowels(text){
    const vowels=["a", "e", "i", "o", "u", "y"];
    return text.toLowerCase()
        .split("")
        .filter(x => vowels.includes(x))
        .length;
}
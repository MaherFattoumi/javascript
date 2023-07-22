/**
 * Retourner la longueur de la plus grande séquence de caractères identiques consécutifs.
 * 
 * 'abb' => 2
 * 'abbccc' => 3
 * 
 */

function findLongestSubstring(text){
    let list = [];
    let compteur = 1;
    for (i = 0; i < text.length; i++) {
        if (text[i] == text[i+1]){
            compteur += 1 
        }else {
            list.push(compteur)
            compteur = 1
        }
    }
    return Math.max(...list);
}
/**
 * Retourner un Promise qui contient un nombre au carrée aprés un délai.
 * 
 * delayAndSquare(2, 1000) => 4 (aprés 1 seconde)
 * delayAndSquare(3, 2000) => 9 (aprés 2 seconde)
 * 
 */

function delayAndSquare(number, delay){
    return new Promise((resolve) => {
        setTimeout(resolve, delay, number*number)
    });
}
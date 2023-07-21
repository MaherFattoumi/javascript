/**
 * Determiner si une année est bissextile ou pas 
 * Une année est bissextile si elle est divisible par 400, ou si elle est divisible par 4, mais pas par 100.
 * 2001 => false
 * 2004 => true
 * 3000 => false
 */

function isBissextile(year){
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
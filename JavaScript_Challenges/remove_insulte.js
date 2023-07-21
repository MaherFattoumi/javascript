/**
 * Supprimer l'insulte "Fuck" d'un commentaire
 * 
 * 'fuck' => ''
 * 'Fuck xx yy zz' => ' xx yy zz'
 * 
 */

function getSafeComment(comment){
    return comment.replace(/fuck/ig, '');
}
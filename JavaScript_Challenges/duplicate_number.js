/**
 * Retourner un tableau qui contient les éléments en double.
 * 
 * [1, 1, 2] => [1]
 * [1, 2, 3, 2, 1] => [1, 2]
 * 
 */

const tab1 = [];
const tab2 = [1];
const tab3 = [1, 1, 2];
const tab4 = [1, 2, 3, 2, 1];

function findDuplicateNumber(tab){
    return tab.filter((number, index) => tab.indexOf(number) !== index);
}

// Tests
findDuplicateNumber(tab1);
findDuplicateNumber(tab2);
findDuplicateNumber(tab3);
findDuplicateNumber(tab4);
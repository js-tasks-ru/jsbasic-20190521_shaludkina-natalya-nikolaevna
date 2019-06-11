'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMinMax(inputData) {

    //let inputData = '25,-1,-234,4,  1000';

    let arr = inputData.split(/[\s,]+/);

    let arrOfNumber = arr.map(string => parseFloat(string));
    alert(arrOfNumber);


    let arrOfOnlyNumber = arrOfNumber.filter(function(num) {
        if (isNumeric(num)) {
            return true;
        } else {
            return false;
        }
    });
    alert(arrOfOnlyNumber);


    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }


    let min = Math.min.apply(null, arrOfOnlyNumber);
    let max = Math.max.apply(null, arrOfOnlyNumber);

    return { min , max };

}

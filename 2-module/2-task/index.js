/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty (obj) {

    let counter = 0;

    for (const key in obj) {
        counter++;
    }

    return counter > 0 ? false : true;
}


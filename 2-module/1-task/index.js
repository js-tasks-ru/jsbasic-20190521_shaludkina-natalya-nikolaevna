/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */


function clone(obj) {

    let cloneObj = {};

    for (const key in obj) {

        if (typeof obj[key] !== 'object') {
            cloneObj[key] = obj[key];
        }
        if (typeof obj[key] === 'object') {
            cloneObj[key] = (obj[key] === null ? null : clone(obj[key]));
        }
    }
    return cloneObj;
    console.log(cloneObj);
    console.log(obj);
}
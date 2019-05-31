/**
 * Power
 * @param {number} x base
 * @param {number} n index
 * @returns {number}
 */

"use strict"; //деректива для перевода код в режим полного соответствия современному стандарту
function pow(x, n) {
    let result = x;

    if (n <= 1) {
        alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
    } else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }
    return result;
}

alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(1, 100));
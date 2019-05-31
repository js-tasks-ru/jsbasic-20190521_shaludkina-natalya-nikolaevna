'use strict';

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */


function isValid (userName) {
    var result = (userName.length >= 4 && userName.length != 0 && isSpace(userName) != true); //условия проверки имени на количество символов не менее 4, пустую строку (имя не ввели) и на наличие пробелов
    return result;
}

function isSpace (userName) { //функция, которая ищет пробелы в имени и, если пробел найден, возвращает true
    for (let i=0; i < userName.length; i++){
        if (userName[i] == ' '){
            return true;
        }
    }
}

function sayHello () {
    let userName = prompt('Введите ваше имя');
    print(isValid(userName));

    if (isValid(userName) === true) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

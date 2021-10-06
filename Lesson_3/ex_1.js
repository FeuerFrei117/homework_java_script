'use strict';

function main() {
    let user_prompt = +prompt('Введите число:');
    user_prompt = user_list(user_prompt);
    alert_num(user_prompt);
}

/**
 * Принимает number и возвращает массив от 0 до вводимого числа включительно
 * @param {number} num До этого числа включительно будет создан массив
 * @returns {Array} list Возвращает массив
 */
function user_list(num) {
    let list = [];
    for (let i = 0; num >= i; i++)
        list.push(i);
    return list;
}

/**
 * Принимает массив и выводит в console каждый элемент массива определяя: ноль, четный, НЕчетный
 * @param {Array} array Массив в котором каждый элемент number
 */
function alert_num(array) {
    for (let i in array) {
        if (i == 0) {
            console.log(`${i} - это ноль`)
        } else if (i % 2 == 0) {
            console.log(`${i} - четное число`)
        } else {
            console.log(`${i} - НЕчетное число`)
        }
    }
}

main();
'use strict';

/**
 * Принимает массив и вывводи в console отфильтрованный массив с элементами у которых есть в photos файлы
 * @param {Array} arr массив с ключами и значениями
 */
function products_with_photos(arr) {
    let new_arr = arr.filter(function (el) {
        return el.photos !== undefined && el.photos.length >= 1;
    });
    console.log(new_arr);
}

/**
 * Принимает массив и выводит в console отсортированный массив по цене (от низкой цены к высокой)
 * @param {Array} arr массив с ключами и значениями
 */
function sort_from_high_to_low(arr) {
    // решение №1
    let new_arr = arr.sort(function (el_1, el_2) {
        if (el_1.price < el_2.price) {
            return -1;
        }
        if (el_1.price > el_2.price) {
            return 1;
        } else {
            return 0;
        }
    })

    // решение №2
    // let new_arr = arr.sort(function (el_1, el_2) {
    //     return el_1.price - el_2.price;
    // })

    console.log(new_arr)
}

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

products_with_photos(products);

sort_from_high_to_low(products);

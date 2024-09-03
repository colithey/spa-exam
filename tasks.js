// Задача 1: Проверка на палиндром
// Описание: Напишите функцию isPalindrome, которая принимает строку и возвращает
// true, если строка является палиндромом (читается одинаково слева направо и справа
// налево), и false в противном случае. При проверке игнорируйте регистр и пробелы.

// const isPalindrome = (string) => {
//     string = string.toLowerCase().replace(' ', '')
//     console.log(string);
//     const newStr = string.toLowerCase().split('').reverse().join('').replace(' ', '')
//     console.log(newStr);
//     if (string === newStr) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome('hello'));

// Задача 2: Найти минимальное и максимальное значение в массиве
// Описание: Напишите функцию findMinMax, которая принимает массив чисел и
// возвращает объект с минимальным и максимальным значением в массиве. Не
// используйте встроенные методы Math.min(), Math.max() или sort().

const findMinMax = (arr) => {
    let minNum = 0
    let maxNum = 0
    let obj = {
        min: null,
        max: null
    }
    for ( let i = 0; i < arr.length; i++ ) {
        maxNum = arr[0]
        if ( minNum > arr[i] ) {
            minNum = arr[i]
        } else if ( maxNum < arr[i] ) {
            maxNum = arr[i]
        } else {
            ''
        }
    }
    return {...obj, min: minNum, max: maxNum}
}

console.log(findMinMax([-5, -2, -1, -7]));

// Задача 3: Найти повторяющиеся значения в массиве
// Описание: Напишите функцию findDuplicates, которая принимает массив и
// возвращает новый массив, содержащий только те значения из исходного массива,
// которые встречаются более одного раза. Учитывайте типы данных при проверке
// (строка, число).

const findDuplicates = (arr) => {
    
}

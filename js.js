Дана строка '12345'. Найдите сумму цифр этой строки.

let str = '12345';
let arr = str.split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}

console.log(sum);

Дано число 12345. Найдите сумму цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}

Дано число 12345. Найдите произведение цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let mul = 1;
for (let i = 0; i<arr.length; i++){
mul *= +arr[i];
}

console.log(mul);

Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let num = 12345;
let arr = (''+num).split('').reverse().join('');
console.log(arr);

Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.
let arr = ['a', 'b', 'c'];
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}

Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.
let arr = ['a', 'b', 'c', 'd'];
let str = arr.join('+');
console.log(str);

Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
let arr = [1,2,3];
let sum = 0;
for (let i=0;i<arr.length; i++){
sum += arr[i];
}
console.log(sum);



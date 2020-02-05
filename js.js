Дана строка '12345'. Найдите сумму цифр этой строки.

let str = '12345';
let arr = str.split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}

console.log(sum);
---------------------------------------------------------------
Дано число 12345. Найдите сумму цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum += +arr[i];
}
---------------------------------------------------------------
Дано число 12345. Найдите произведение цифр этого числа.

let num = 12345;
let arr = (''+num).split('');
let mul = 1;
for (let i = 0; i<arr.length; i++){
mul *= +arr[i];
}

console.log(mul);
---------------------------------------------------------------
Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let num = 12345;
let arr = (''+num).split('').reverse().join('');
console.log(arr);
---------------------------------------------------------------
Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

let arr = ['a', 'b', 'c'];
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}
---------------------------------------------------------------
Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.

let arr = ['a', 'b', 'c', 'd'];
let str = arr.join('+');
console.log(str);
---------------------------------------------------------------
Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

let arr = [1,2,3];
let sum = 0;
for (let i=0;i<arr.length; i++){
sum += arr[i];
}
console.log(sum);
---------------------------------------------------------------
Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

let obj = {'1a':1, '2b':2,'c-c':3 };
let sum = 0;
for(let key in obj){
sum +=obj[key];
}
console.log(sum);
---------------------------------------------------------------
Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

let obj = {key1: 1, key2: 2, key3: 3};
let sum = 0;
for (let key in obj){
sum += obj[key];
}
console.log(sum);
---------------------------------------------------------------
let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?

console.log(obj['1a'],obj.b2, obj['eee-'], obj.d4);
---------------------------------------------------------------
Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

let obj = {name:'Marta', surname:'Kozak', patronymic: 'Sergiivna'};

for(let key in obj){
console.log(obj[key]+ ' ');
}
---------------------------------------------------------------
Создайте объект date (дата) с ключами year (год), month (месяц) и day (день) и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате 'год-месяц-день'.

let date = {year:2010, month: 'January', day: 'Monday'};
for (let key in date){
console.log(date[key]+ '-');
}
---------------------------------------------------------------
В переменной arr содержится некоторый массив с числами.

Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

let arr = [1,2,3];
if(arr.length==3){
let sum = 0;
for(let i =0; i<arr.length; i ++){
sum+=arr[i];
}
alert(sum); 
}else{
alert('No');
}
---------------------------------------------------------------
Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let num = 32;
let check = ''+num;
if(check[check.length-1] == 0){
console.log('yes');
}
else{
console.log('no');
}
---------------------------------------------------------------
Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

let num = 10;
let check = ''+num;
if(check[check.length-1] ==0 || check[check.length-1] == 2 || check[check.length-1] == 4 || check[check.length-1] == 6 || check[check.length-1] ==8){
alert('Число парне');
}else{
alert('Число непарне');
}
---------------------------------------------------------------
Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком.

Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

let num = 20;
if (num % 2 == 0){
alert('Число парне');
}else{
alert('Число непарне');
}
---------------------------------------------------------------
Дано число. Проверьте, что оно делится на 3.

let num = 9;
if(num % 3 == 0){
alert('yes');
}else{
alert('no');
}
---------------------------------------------------------------
Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde';
if(str[0] == 'a'){
alert('yes');
}
else{
alert('no');
}
---------------------------------------------------------------
Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 12345;
let str = ''+num;

if(str[0] ==1 || str[0] == 2 || str[0] ==3){
 alert('yes'); 
}else{
 alert('no'); 
}
---------------------------------------------------------------
Дано трехзначное число. Найдите сумму цифр этого числа.

let num = 123;
let str = ''+ num;
let sum = 0;
for(let elem of str){
  sum+= +elem;
}
console.log(sum);
---------------------------------------------------------------
Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 123456;
let str = ''+num;
let sum = +str[0] + +str[1]+ +str[2];
console.log(sum);
---------------------------------------------------------------
Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.
  
 let num = +prompt('enter the number 1,2,3 or 4','')
  switch(num){
    case 1: alert('winter');
      break;
    case 2: alert('spring');
      break;
    case 3: alert('summer');
      break;
    case 4: alert('autumn');
      break;
    default: 'incorrect number';
      break;
  }
---------------------------------------------------------------
Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. Запишите в переменную result число 1, если переменная num больше или равна нулю, и число -1, если переменная num меньше нуля.

let num = 3;
let result = num >= 0 ? '1':'-1';
console.log(result);
---------------------------------------------------------------
Пусть даны следующие переменные:

let a = 2 * (3 - 1);
let b = 6 - 2;
Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
 
console.log(a==b);
---------------------------------------------------------------
Пусть даны следующие переменные:

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
Используя оператор >, узнайте, больше ли переменная a, чем b.

console.log(a > b);
---------------------------------------------------------------
 Пусть даны следующие переменные:

let a = 2 ** 4;
let b = 4 ** 2;
Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.

console.log(a != b);
---------------------------------------------------------------
 Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль суму нечетных элементов массива.

let arr = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i<arr.length;i++){
if(arr[i]%2!=0){
sum+=arr[i];
}
}
console.log(sum);
---------------------------------------------------------------
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

let arr = [1,2,3,4,5];
let mul = 1;
for(let i = 0; i<arr.length; i++){
mul *= arr[i];
}
console.log(mul);
---------------------------------------------------------------
Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i<arr.length; i++){
if(arr[i]>3 && arr[i] <10){
console.log(arr[i]);
}
}
---------------------------------------------------------------
Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [-1, -3, 2, 2];
let sum = 0;
for(let i = 0; i<arr.length; i++){
if(arr[i] > 0){
sum+=arr[i];
}
}
console.log(sum);
---------------------------------------------------------------
 
Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество).

let arr = [2, 5, 9, 15, 1, 4];
let sum = 0;
for(let i = 0; i<arr.length; i++){
sum+=arr[i]
}
console.log(sum/arr.length);
---------------------------------------------------------------
 
Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
 
let arr =  [10, 20, 30, 50, 235, 3000];
for(let i =0; i<arr.length;i++){
let str = String(arr[i]);
if(Number(str[0])==1 || Number(str[0])==2 ||Number(str[0])==5){
console.log(str);
}
}
---------------------------------------------------------------
Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr = [1,2,3,4,5];
for(let i = arr.length; i >= 0; i--){
console.log(arr[i])
}
---------------------------------------------------------------
Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

let arr = [1,1,2,4,4];
for(let i =0; i<arr.length; i++){
if(arr[i] == i){
console.log(arr[i]);
}
}
---------------------------------------------------------------
Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран

let arr = ['a', 'b', 'c', 'd', 'e'];
for(let elem of arr){
console.log(arr);
}
---------------------------------------------------------------
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let eleme of arr){
sum+=elem;
}
console.log(sum);

---------------------------------------------------------------
 Дан объект следующий объект:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
С помощью цикла for-in найдите сумму элементов этого объекта.
let sum = 0;
for(let key in obj){
sum+=obj[key];
}
console.log(sum);
---------------------------------------------------------------
Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

let arr = [1,2,3,4,0,6,7];
for(let elem of arr){
 console.log(elem);
if(elem == 0){
 break;
}
}
---------------------------------------------------------------
Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

let arr = [1,2,3,4,0,-6,-7];
let sum = 0;
for(let elem of arr){
if(elem > 0){
sum += elem;
}
}
console.log(sum);
---------------------------------------------------------------
Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).

let arr = [1,2,4,4,5,3];
for(let i = 0; i<arr.length; i++){
if (arr[i] == 3){
console.log(i)
}
}
---------------------------------------------------------------
Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for(let elem of arr){
if(elem == 'c'){
flag = true;
break;
}
}
if(flag == true){
alert('yes');
}else {
alert('no');
}
---------------------------------------------------------------
проверить число на простоту.

let num = 31;
let flag = true;
for(let i =2; i<num; i++){
if(num % i == 0){
flag = false;
 break;
}
}
if(flag == true){
alert('number is simple');
}else{
alert('number is not simple');
}
---------------------------------------------------------------
Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат деления не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

let num = 5;
let res = 1000;
while(num<res){
num*=3;
}
console.log(num);
---------------------------------------------------------------
Решите предыдущую задачу через цикл for.

for(var num = 5, i = 0; num<1000; num*=3, i++);
console.log(num, i);
---------------------------------------------------------------
С помощью цикла сформируйте строку, заполненную 5-тью нулями.

let str = '';
for(let i =0;i<5;i++){
str+=0;
}
console.log(str);
---------------------------------------------------------------
С помощью цикла сформируйте строку 123456789 и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';
for(let i = 1; i<=9; i++){
str+=i;
}
console.log(str);
---------------------------------------------------------------
С помощью цикла сформируйте строку 987654321 и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';
for (let i = 9; i>=1; i--){
str+=i;
}
console.log(str);
---------------------------------------------------------------
С помощью цикла сформируйте строку -1-2-3-4-5-6-7-8-9- и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';
for(let i = 1; i<=9; i++){
str+='-'+i;
}
console.log(str+ '-');
---------------------------------------------------------------
Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

for(let i = 10; i<=1000; i++){
let str = String(i);
if((Number(str[0])+ Number(str[1])) == 5){
console.log(str);
}
}
---------------------------------------------------------------
Переберите циклом числа от 1 до 30 и сложите их как строки.

let str = '';
for(let i = 1; i<=30; i++){
str+=i;
}
console.log(str);
---------------------------------------------------------------
С помощью двух вложенных циклов выведите на экран следующую строку:

111222333444555666777888999

for(let i = 1; i<=9; i++){
for(let j = 1; j<=3; j++){
document.write(i);
}
}
---------------------------------------------------------------
С помощью двух вложенных циклов выведите на экран следующую строку:

11 12 13 21 22 23 31 32 33

for(let i = 1; i<=3; i++){
for(let j = 1; j<=3; j++){
document.write(i);
document.write(j);
}
}
---------------------------------------------------------------
Объявите пустой массив, а затем заполните его 5-ю буквами x.

let arr = [];
for(let i = 0;i<5;i++){
arr[i]= 'x';
}
console.log(arr);
---------------------------------------------------------------
 С помощью цикла заполните массив числами от 1 до 100.

let arr =[];
for(let i = 0; i<100; i++){
arr[i] = i+1;
}
console.log(arr);
---------------------------------------------------------------
С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr = [];
for(let i = 1,j=0; i<=99; i+=2,j++){
arr[j] = i;
}
console.log(arr);
---------------------------------------------------------------
Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr = [1,2,4,4,5,3];
let narr = [];
for(let elem of arr){
elem**=2;
narr.push(elem);
}

console.log(narr);
---------------------------------------------------------------
Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.

let arr = [1,2,4,4,5,3];

for (let i = 0; i<arr.length; i++){
--arr[i];
}

console.log(arr);
---------------------------------------------------------------
 Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.

let arr = [1,2,4,4,5,3];

for(let i = 0; i<arr.length; i++){
arr[i]+=10;
}

console.log(arr);

---------------------------------------------------------------
Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

let arr = [];

for(let i = 1; i <=10; i++){
arr.push(i);
}

console.log(arr);
---------------------------------------------------------------
 Используя цикл и метод push заполните массив 10-ю буквами x.

let arr = [];
let x = 'x';
for(let i = 1; i <=10; i++){
arr.push(x);
}

console.log(arr);
---------------------------------------------------------------
Используя цикл и метод push заполните массив 10-ю случайными целыми числами. Пусть случайные числа будут в промежутке от 1 до 10.
 
let arr = [];

for(let i = 1; i<=10; i++){
let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
arr.push(num);
}

console.log(arr);
---------------------------------------------------------------
Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

let arr = [1,2,-4,4,5,-3];
let narr = [];

for(let elem of arr){
if(elem >= 0){
narr.push(elem);
}
} 

console.log(narr);
---------------------------------------------------------------
Даны следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Описанным способом сделайте из него массив:

let arr = ['e', 'd', 'c', 'b', 'a'];
#1
let narr = [];

for(let i = 0; i<arr.length; i++){
narr.unshift(arr[i]);
}

console.log(narr);

#2

let narr = [];

for(let i = arr.length -1; i>=0;i--){
narr.push(arr[i]);
}

console.log(narr);
---------------------------------------------------------------
Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.

let obj = {};

obj['monday'] = 1;
obj['tuesday'] = 2;
obj['wednesday'] = 3;
...

console.log(obj);
---------------------------------------------------------------
Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let obj = {};

for(let i = 0; i < 7; i++){
let key = arr1[i];
let value = arr2[i];
obj[key] = value;
}

console.log(obj);
---------------------------------------------------------------
Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj = {};

for(let i = 0; i < 7; i++){
let key = arr2[i];
let value = arr1[i];
obj[key] = value;
}

console.log(obj);
---------------------------------------------------------------
let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

let nobj = {};

for(let key in obj){
if(obj[key] >= 10 && obj[key] <= 20){
nobj[key] = obj[key];
}
}

console.log(nobj);
---------------------------------------------------------------
Дан объект:

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
Запишите в новый объект дни недели, номера которых являются нечетными числами.

let nobj = {};

for(let key in obj){
if(key%2 !=0){
nobj[key] = obj[key];
}
}
console.log(nobj);
---------------------------------------------------------------
Дан объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

for(let key in obj){
obj[key]**=2;
}

console.log(obj);
---------------------------------------------------------------
Пусть у нас дан следующий объект:

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
Давайте поменяем местами ключи и значения в объекте, то сделаем из нашего объекта следующий:

{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

let nobj = {};

for(let key in obj){
nobj[obj[key]] = key;
}

console.log(nobj);
---------------------------------------------------------------
Дан следующий объект с работниками и их зарплатами:

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%.


for(let key in obj){
obj[key] =obj[key]+(obj[key] * 0.10);
}

console.log(obj);
---------------------------------------------------------------
Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

for(let key in obj){
if(obj[key]<=400){
obj[key] = obj[key]+(obj[key]*0.10);
}
}
console.log(obj);
---------------------------------------------------------------
Даны следующие массивы:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

let obj = {};

for(let i =0 ; i<5; i++){
let key = arr1[i];
let value = arr2[i];
obj[key] = value;
}
console.log(obj);
---------------------------------------------------------------
Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений.

let keySum = 0;
let valSum = 0;
for(let key in obj){
keySum+= +key;
valSum+=obj[key];
}

console.log(keySum/valSum);
---------------------------------------------------------------
Дан следующий объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой.	

let arr1 = [];
let arr2 = [];

for(let key in obj){
arr1.push(key);
arr2.push(obj[key]);
}

console.log(arr1);
console.log(arr2);

---------------------------------------------------------------
Дан следующий объект:

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.

То есть у вас в результате получится вот такой массив:

let arr = [
	125,
	225,
	128,
	145,
	281,
];

let narr = [];

for(let key in obj){
if(String(obj[key])[0]=='1' || String(obj[key])[0] == '2'){
narr.push(obj[key]);
}
}
console.log(narr);

---------------------------------------------------------------
Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

let obj = {};

for(let i = 0; i<arr.length; i++){
let key = i+1;
obj[key] = arr[i];
}

console.log(obj);
---------------------------------------------------------------
Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let obj = {};
for(let i = 0; i<arr.length; i++){
let key = arr[i];
obj[key] = i+1;
}

console.log(obj);
---------------------------------------------------------------
Дан следующий массив:

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Подсчитайте количество цифр 3 в этом массиве.

let count = 0;
for(let elem of arr){
if(elem == 3){
++count;
}
}
console.log(count);
---------------------------------------------------------------
Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let countA = 0;
let countB = 0;

for(let elem of arr){
if(elem == 2){
++countA;
}else if(elem == 3){
++countB;
}
}

console.log(countA);
console.log(countB);
---------------------------------------------------------------
Пусть у нас опять дан наш массив:

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
Давайте подсчитаем сколько каких элементов есть в этом массиве и представим результат в виде объекта вот такого объекта:

{a: 3, b: 2, c: 1}

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let obj = {};

for(let elem of arr){
if(obj[elem]==undefined){
obj[elem] = 1;
}else{
++obj[elem];
}
}

console.log(obj);
---------------------------------------------------------------
Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i<arr.length; i++){
console.log(arr[i]);
}
---------------------------------------------------------------
Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
let arr = [1, 2, 3, 4, 5];

for(let i = 1; i<arr.length; i++){
console.log(arr[i-1] + arr[i]);
}
---------------------------------------------------------------
Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

let arr = [1, 2, 3, 4, 5];

for(let i = 1; i<arr.length; i++){
console.log(arr[i-1], arr[i-2]);
}
---------------------------------------------------------------
Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

let arr = [1, 2, 3, 4, 5];
for(let i = 1; i<arr.length; i++){
console.log(arr[i-1]+arr[i]+ arr[i+1]);
}
---------------------------------------------------------------
Числа Фибоначчи

let one = 0;
let two = 1;

for(let i = 1; i<=10;i++ ){
let current = one + two;

one = two;
two = current;
console.log(current);
}

---------------------------------------------------------------
Выведите на экран следующую пирамидку:

xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx

let str = '';

for(let i =0;i<5; i++){
str +='xx';
console.log(str+ '<br>');
}
---------------------------------------------------------------
С помощью цикла сформируйте следующий массив:

['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let str = '';
let arr = [];
for(let i =0; i<5;i++){
str+='xx';
arr.push(str);
}

console.log(arr);
---------------------------------------------------------------
С помощью цикла сформируйте следующий массив:

['11111', '22222', '33333', '44444', '55555']


let arr = [];
for(let i = 1; i<=5;i++){
	let str = '';
for(let j=1;j<=5;j++){
str +=i;
}
	arr.push(str);
}
console.log(arr);
---------------------------------------------------------------
Дан двухмерный массив с числами:

let arr = [[1, 2, 3], [4, 5], [6]];
С помощью вложенных циклов найдите сумму элементов этого массива.

let sum = 0;
for(let subArr of arr){
for(let elem of subArr){
sum += elem;
}
}

console.log(sum);

Дан трехмерный массив с числами:
---------------------------------------------------------------
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива.

let sum = 0;

for(let i = 0; i <arr.length; i++){
for(let j = 0; j< arr[i].length; j++){
for(let k = 0; k<arr[i][j].length; k++){
sum+=arr[i][j][k];
}
}
}
console.log(sum);
---------------------------------------------------------------
Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = [];

for(let i =0; i <5;i++){
arr[i] = [];
for(let j = 1; j<=5;j++){
arr[i].push(j);
}
}	
console.log(arr);
---------------------------------------------------------------
Сформируйте с помощью двух вложенных циклов следующий массив:

[['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]	

let arr = [];

for(let i = 0; i<4; i++){
arr[i] = [];
for(let j = 0; j<4;j++){
arr[i].push('x');
}
}
console.log(arr);
---------------------------------------------------------------
Сформируйте с помощью двух вложенных циклов следующий массив:

[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr = [];

let k =2;

for(let i =0;i<4;i++){
arr[i] = [];
for(let j = 0;j<3;j++){
arr[i][j] = k;
k+=2;
}
}
console.log(arr);
---------------------------------------------------------------
Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
let num =1;
for(let i = 0; i<1;i++){
arr[i]=[];
for(let j =0;j<4;j++){
arr[i][j] = [];
for(let k=0;k<2;k++){
arr[i][j][k] = num;
num++;
}
}
}

console.log(arr);
---------------------------------------------------------------
Дан следующий объект:

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
Найдите сумму элементов приведенного объекта.

let sum = 0;
for(let key in obj){
let subObj = obj[key];
   for(let subKey in subObj){
sum+=subObj[subKey];
   }
}

console.log(sum);
---------------------------------------------------------------
	
Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func(num){
let ten = 10;
let two = 2;
let i = 0;
while (true) {
num/=two;
if(num<=ten){
return i;
}
i++;
}
}
let result = func(125);
console.log(result);

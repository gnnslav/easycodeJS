
// Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки

let string = 'some test string';

string = string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase();

console.log(string);

string = 'some test string';

string = `${string[0].toUpperCase()}${string.slice(1, string.length - 1)}${string[string.length - 1].toUpperCase()}`;

console.log(string);

string = 'some test string';

console.log(string.indexOf('string'));

// Найти положение второго пробела в строке (“вручную” ничего не считать)

string = 'some test string';

let index = string.indexOf(' ');

console.log(string.indexOf(' ', index + 1));

//Получить строку с 5-го по 9-й символы.

string = 'some test string';

string = string.slice(5, 9);

console.log(string);

//Получить число pi из Math и округлить его до 2-х знаков после точки.

let numPi = Math.PI.toFixed(2);

console.log(numPi);

//Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51.

let numMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(numMax);

let numMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(numMin);

//Получить случайное число и округлить его до двух цифр после запятой

let numRandom = Math.random().toFixed(2);

console.log(numRandom);

// Получить случайное целое число от 0 до X. X - любое произвольное число

let num = Math.random() * 100;

console.log(num.toFixed(0));

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)

let sum = 0.6 + 0.7;

console.log(sum.toFixed(1));

//Создать объект с полем product, равным 'iPhone'

const obj = {
    product: 'iPhone'
};
console.log(obj);

//Добавить в объект поле price, равное 1000 и поле currency, равное 'dollar'.

obj.price = 1000;

console.log(obj);

obj.currency = 'dollar';

console.log(obj);

//Добавить поле details, которое будет содержать объект с полями model и color
obj.details = {};

obj.details.model = 'model';
obj.details.color = 'color';

console.log(obj);

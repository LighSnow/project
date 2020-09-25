"use strict";


const str = "tEst";

// console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello World!";

console.log(logg.slice(6, 12));  
/*вырезает строку с заданного индекса (начало строки, конец строки не включая его) или пишем с какого индекса и до конца, (начало строки)
*/

console.log(logg.substring(6, 12));  // не поддерживает отрицательные значения
console.log(logg.substr(6, 6)); // (6, сколько символов вызерать)


const num = 12.2;
console.log(Math.round(num)); //округление к ближайщему целому числу

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
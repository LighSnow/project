"use strict";


const str = 'test';

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello World!";

console.log(logg.slice(6));           //обрезает строку с определенного индекса
console.log(logg.slice(-6));

console.log(logg.substring(6, 12));   


console.log(logg.substr(6, 6));       // сколько символов необходимо вырезать


const num = 12.2;
console.log(Math.round(num));    //округление до ближайшего целого

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
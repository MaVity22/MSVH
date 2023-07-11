// Módulo 1: fichero ejecutable que importa a circulo.js
//var circulo = require('./circulo.js');    ------> se importa el módulo completamente
const { area, circunferencia, valorPI } = require('./circulo.js');     // Se puede desestructurar los métodos del módulo que se quiera 
console.log('Area (radio 4): ' + area(4));
console.log('Perímetro (radio 4): ' + circunferencia(4));
console.log('PI: ' + valorPI);


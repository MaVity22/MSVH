// Modulo 2: Fichero con librería circulo.js
var PI = Math.PI;

exports.area = function (r) {
    return PI * r * r;
}
exports.circunferencia = function (r) {
    return 2 * PI * r;
}

//console.log(require);
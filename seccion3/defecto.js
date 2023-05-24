// parametros por defecto.
var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "se llama ".concat(nombre, " se apellida ").concat(apellido, " y tiene ").concat(edad, " a\u00F1os");
};
console.log(mostrar('Manuel', 'Muños', 37));
console.log(mostrar('Victoria', 'Mas'));

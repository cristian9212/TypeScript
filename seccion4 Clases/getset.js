var permiso = false;
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (nombre) {
            if (permiso) {
                this.nombre = nombre;
            }
            else {
                console.log('No tiene permiso para esto');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var object = new Persona('Manuel');
object.setNombre = 'Jose';
console.log(object.getNombre);

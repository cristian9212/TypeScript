var persona = { altura: 2, peso: 120, nombre: 'Jose' };
function MostrarMediaPeso(persona) {
    var mediapeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene una media se ").concat(mediapeso);
    }
    else {
        return "No se quien eres pero tiene una media de ".concat(mediapeso);
    }
}
console.log(MostrarMediaPeso(persona));

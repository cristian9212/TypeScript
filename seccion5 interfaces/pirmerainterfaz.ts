interface Persona{
    // Atributos
    nombre:string
    apellido:string

}

function caminar(persona:Persona):void{
    console.log('La persona' + persona.apellido + 'Esta caminando')
}
let nueva_persona:Persona = {nombre:'Manuel', apellido:'Muños'}
caminar(nueva_persona)
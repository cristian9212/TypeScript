interface Persona{
    altura:number
    peso:number
    nombre?:string
}

let persona = {altura:2,peso:120,nombre:'Jose'} 

function MostrarMediaPeso(persona:Persona):string{
    let mediapeso:number = persona.altura / persona.peso
    if(persona.nombre){
        return `${persona.nombre} tiene una media se ${mediapeso}`
    }else{
        return `No se quien eres pero tiene una media de ${mediapeso}`
    }
}

console.log(MostrarMediaPeso(persona))

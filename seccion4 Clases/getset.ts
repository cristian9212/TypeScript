let permiso:boolean = false
class Persona {
    public nombre:string

    constructor(nombre:string){
        this.nombre = nombre 
    }
    get getNombre():string{
        return this.nombre
    }
    set setNombre(nombre:string){
        if(permiso){
            this.nombre = nombre   
        }else{
            console.log('No tiene permiso para esto')
        }
        
    }
}

const object = new Persona('Manuel') 
object.setNombre = 'Jose'
console.log(object.getNombre)
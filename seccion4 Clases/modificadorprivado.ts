class Animal{
    private nombre:string
    private tamaño:number

     public constructor(_nombre:string, _tamaño:number){
        this.nombre = _nombre
        this.tamaño = _tamaño
    }

     public moverse():void{
        console.log('Me estoy moviendo')
    }
}

const obj = new Animal('Serpiente',2)
obj.moverse

class Conectar{
    private url:string
}
const ob = new Conectar()


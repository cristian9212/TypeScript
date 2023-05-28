class Padre {
    nombre:string
    edad:number

    constructor(_nombre, _edad:number){
        this.nombre = _nombre
        this.edad = _edad
    }

    mostrarNombre(){
        console.log(this.nombre)
    }
}

class Hijo extends Padre{
    
    apellido:string

    constructor(_nombre:string, _edad:number,_apellido:string){
        super(_nombre, _edad)
        this.apellido = _apellido
    }

    mostrarNombreHijo(){
        console.log(this.nombre)
    }
}

const nuevoHijo = new Hijo('Maniel',22,'Nuños')
nuevoHijo.mostrarNombre
nuevoHijo.mostrarNombreHijo
nuevoHijo.edad
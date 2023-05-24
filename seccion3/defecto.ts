// parametros por defecto.

const mostrar =(nombre:string,apellido:string,edad:number = 32)=>{
    return `se llama ${nombre} se apellida ${apellido} y tiene ${edad} años`
}

console.log( mostrar ('Manuel','Muños',37))
console.log(mostrar('Victoria','Mas'))

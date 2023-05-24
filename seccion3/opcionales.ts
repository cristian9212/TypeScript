const opcionales = (nombre:string,apellido: string, edad?:number )=>{
  if (edad){

  console.log(` se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}`)
  }
console.log(`se llama ${nombre} su apellido es ${apellido}`)
}
opcionales ('Manuel','Muños',37)
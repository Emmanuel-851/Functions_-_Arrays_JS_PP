//Unique Arrays
console.log()
console.log("Lista de palabras repetidas")
console.log()
let palabras = ['cangrejo','veneno','contagioso','sencillo','traer','fuerte','patio de recreo','veneno','comunión','simple','traer']

console.log(palabras)
console.log("----------------------------------------")

uniquifyArray = (repetido) =>{
  let acum=null

    let indice=palabras.indexOf("veneno")
      palabras.splice(indice,1)
      let indice2=palabras.indexOf("traer")
      palabras.splice(indice2,1)


  return repetido
}
console.log()
console.log("Lista de palabras que ya no se repiten")
console.log()
console.log(uniquifyArray(palabras))
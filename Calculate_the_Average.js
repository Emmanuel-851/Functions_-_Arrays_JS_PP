//Calculate the Average

//Level 1: Array of Numbers
//suma de numeros y el promedio
let numeros=[ 2 , 6 , 9 , 10 , 7 , 4 , 1 , 9 ]

 averageNumbers = (suma) =>{
  let suma_final=null

  suma.map((resul) =>{
    suma_final +=resul
     
  })
  return suma_final/numeros.length
}
console.log("el promedio es "+averageNumbers(numeros))



//Level 2: Array of Strings
console.log("")
console.log("-----------------------------------------------")
console.log("")
let palabras= ['asiento','corresponder','lino','motivo','agujero','olor','inteligente','caos','combustible','palacio']

averageWordLength = (palabras) =>{
  let suma=null

  palabras.map((resul) =>{
    suma=suma+resul.length
     
  })
  return suma
}
console.log("longitud de las palabras es "+averageWordLength(palabras))
//Calculating a Sum

let numeros=[ 6 , 12 , 1 , 18 , 13 , 16 , 2 , 1 , 8 , 10 ]

sumArray = (suma) =>{
 let suma_final=null

 suma.map((resul) =>{
   suma_final +=resul
 })
 return suma_final
}
console.log("la suma de los numeros "+numeros+" es "+sumArray(numeros))
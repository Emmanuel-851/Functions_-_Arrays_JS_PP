//Find the maximum

let numero = ['51','59']

let q=numero[0]
let w=numero[1]
let j=null

maxOfTwoNumbers = (numero_mayor) =>{
     
    q>w ? j="el numero "+q+" es mayor que el numero "+w : j="el numero "+w+" es mayor que el numero "+q

  return j
}
console.log(maxOfTwoNumbers(numero))

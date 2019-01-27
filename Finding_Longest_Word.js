//Funciones y matrices

//Finding Longest Word

let palabras=['misterio','hermano','aviador','cocodrilo','perla','huerto','crackpot']
let a1=palabras[0].length
let a2=palabras[1].length
let a3=palabras[2].length
let a4=palabras[3].length
let a5=palabras[4].length
let a6=palabras[5].length
let a7=palabras[6].length

palabras.reverse()
  let contenedor=[]

  palabras.map((letras)=>{
    contenedor.push(letras.length)
  })

findLongestWord = (palabras) => {

for(let m=1; m<contenedor.length; m++){
  for(let e=0;e<contenedor.length-1;e++){
    if(contenedor[e]>contenedor[m]){
 let conte_temp=contenedor[e]
 contenedor[e]=contenedor[m]
 contenedor[m]=conte_temp
  }
  }
}
contenedor.reverse()

  return contenedor[0]
  
}
let x=null

if(findLongestWord(palabras)===a1){
  x="La palabra mas larga es "+palabras[0]+" y tiene "
}else if(findLongestWord(palabras)===a2){
  x="La palabra mas larga es "+palabras[1]+" y tiene "
}else if(findLongestWord(palabras)===a3){
  x="La palabra mas larga es "+palabras[2]+" y tiene "
}else if(findLongestWord(palabras)===a4){
  x="La palabra mas larga es "+palabras[3]+" y tiene "
}else if(findLongestWord(palabras)===a5){
  x="La palabra mas larga es "+palabras[4]+" y tiene "
}else if(findLongestWord(palabras)===a6){
  x="La palabra mas larga es "+palabras[5]+" y tiene "
}else if(findLongestWord(palabras)===a7){
  x="La palabra mas larga es "+palabras[6]+" y tiene "
}

console.log(x+findLongestWord(palabras)+" letras")
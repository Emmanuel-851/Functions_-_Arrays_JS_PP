//Finding Elements
let palabras = ['máquina','subconjunto','problema','comenzar','materia','comer','verdad','desobediencia']

let pe="materia"
let q=palabras[0]
let w=palabras[1]
let e=palabras[2]
let r=palabras[3]
let t=palabras[4]
let y=palabras[5]
let u=palabras[6]
let i=palabras[7]
let j=null
//par saber que si funciona cambia el dato de la variable pe
console.log()
console.log("para saber si si existe una palabra en el arreglo")
console.log()
doesWordExist = (existente) =>{
       if(pe===i){
         j=true
       }else if(pe===u){
         j=true
       }else if(pe===y){
         j=true
       }else if(pe===t){
         j=true
       }else if(pe===r){
         j=true
       }else if(pe===e){
         j=true
       }else if(pe===w){
         j=true
       }else if(pe===q){
         j=true
       }else(j=false)

  return j
}
console.log(doesWordExist(palabras))
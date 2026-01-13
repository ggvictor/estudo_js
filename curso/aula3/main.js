

// const filtroMaiorDe18 = (valor) =>{
//     if(valor >= 18)
//         return valor

// }
const idades = [21,56,14,78,24,65,11,90];
const maior = idades.filter((val,ind,arr) =>{
    if(val >= 18)
        return val
})
const menor = idades.filter((val,ind,arr) =>{
    if(val < 18)
        return val
})



console.log(idades)
console.log(maior)
console.log(menor)
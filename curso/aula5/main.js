// const p_array = document.getElementById("array")
// const btnReduzir = document.getElementById("btn_reduzir")
// const resultado = document.getElementById("resultado")

// const elementos_array = [1,2,3,4,5]

// let ant = []
// let atu = []
// let dobro = []

// p_array.innerHTML = "["+elementos_array+"]"

// btnReduzir.addEventListener('click',(evt)=>{
//     dobro.push(elementos_array[0] * 2)
//     resultado.innerHTML = elementos_array.reduce((anterior,atual,pos)=>{
//         ant.push(anterior)
//         atu.push(atual)
//         dobro.push(atual * 2)
//         return atual + anterior
//     })
//     resultado.innerHTML += "<br/> Valor Anterior:" + ant +"<br/> Valor Atual:" + atu + "<br/> Dobro:" + dobro
// })

const valores = [10,9,77,2,35,8,0]
const it_valores = valores[Symbol.iterator]()


const curso = "html"
const it_curso = curso[Symbol.iterator]()
console.log(curso)
console.log(it_curso.next())
console.log(it_curso.next())
console.log(it_curso.next())
console.log(it_curso.next())
console.log(it_curso.next())

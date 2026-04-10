const teclasNum= [...document.querySelectorAll(".num")] 
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tLimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tresultado")
const tcp = document.getElementById("tcp")
const teste = document.getElementById("teste")
const aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")

let sinal = false
let decimal = false

teclasNum.forEach((e)=>{
    e.addEventListener('click', (evt)=>{
        sinal = false
            if(evt.target.innerHTML == "."){
                if(!decimal){
                    decimal = true
                    if(display.innerHTML == "0"){
                        display.innerHTML = "0."
                    }else{
                        display.innerHTML += evt.target.innerHTML
                    }
            }
            }else{
                if(display.innerHTML == "0"){
                    display.innerHTML = ""
                }
                display.innerHTML += evt.target.innerHTML
            }
})
})

teclasOp.forEach((e)=>{
    e.addEventListener('click', (evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML +="*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
            
            
        }
    })
})

tLimpar.addEventListener('click',()=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener('click',()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcp.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0,99999) //mobile
    // navigator.clipboard.writeText(teste.value)
})
aba.addEventListener('click',()=>{
    calc.classList.toggle("calc_exibir")
})
let input = document.getElementById('inicio');
let select = document.getElementById('iselect');
let res = document.getElementById('res');
let array = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inSelect(n,l){
    if(l.indexOf(Number(n)) 
    != -1){
         return true }
    else{
        return false
    }
}


function adcionar(){
   if(isNumero(input.value) && !inSelect(input.value, array)){
        array.push(Number(input.value));
        let item = document.createElement('option')
        item.text  = `valor ${input.value} adcionado`
        select.appendChild(item)
        res.innerHTML = ''
   }
   else{
         alert('valor invalido ou ja encontrado na lista')
   }
   input.value =""
   input.focus();
}
function finalizar(){
    if(array.length ==0){
        alert('adicione valores')
    }
    else{
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media =0
        for(let pos in array){
            soma+=array[pos]
            if(array[pos]> maior){
                maior = array[pos]
            }
            if(array[pos]< menor){
                menor = array[pos]
            }
        }
        media= soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo , temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>o maior numero e ${maior} </p>`
        res.innerHTML += `<p>o menor numero e ${menor} </p>`
        res.innerHTML += `<p>a soma e ${soma} </p>`
        res.innerHTML += `<p>a media e ${media} </p>`
    }
}
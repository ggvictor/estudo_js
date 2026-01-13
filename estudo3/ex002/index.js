const resultado = fizzBuzz(1);
console.log(resultado);
function fizzBuzz(entrada){
    if( typeof entrada !== 'number'){
        return "não e um numero"
    }
    if(entrada %3==0 && entrada %5==0 ){
        return "fizzBuzz"
    }
    if(entrada %5==0){
        return "Buzz"
    }
    if( entrada %3==0){
        return "fizz"
    }
    else{
        return entrada
    }
}
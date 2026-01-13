class Pessoa{
    nome;
    peso;
    altura;
    
    constructor(nome,peso,altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
    }

    calcularImc(){
        return this.peso/(this.altura * this.altura)
    }
    classificarImc(){
       const imc = this.calcularImc() ;
       if(imc <=17){
            return 'abaixo do peso'
       }
       else if(imc>=17.1){
            return 'magro'
       }
       else if(imc >=20){
            return 'normal'
       }
       else if(imc >= 30){
            return 'obeso'
       }
    }
}
const jose = new Pessoa('jose', 70 , 1.75 )
console.log(jose,jose.calcularImc().toFixed(2), jose.classificarImc())
const victor = new Pessoa('victor' ,71,1.70)
console.log(victor,victor.calcularImc().toFixed(2), victor.classificarImc())
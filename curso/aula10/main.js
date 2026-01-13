const Pessoa = {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome = nome
    },

    getIdade:function(){
        return this.idade
    },
    setIdade:function(idade){
        this.idade = idade
    },

}
const p2 = Pessoa
const p3 = Pessoa

Pessoa.setNome("renan")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)
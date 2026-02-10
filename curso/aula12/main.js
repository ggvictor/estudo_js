const pessoa = {
    nome:"Victor",
    canal:"CFB cursos",
    curso:"JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variaveis",
        aula03:"Condicionais"
    }
    
}
const string_pessoa = '{"nome":"Victor","canal":"CFB cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicionais"}}'

const s_json = JSON.stringify(pessoa)
const o_json = JSON.parse(string_pessoa)

console.log(pessoa)
console.log(s_json)
console.log(o_json)
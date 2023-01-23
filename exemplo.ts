// declarando variáveis no TS
let nome: string = "fulano"

let idade: number = 27

let altura: number = 1.82

let temGato: boolean = false

//criando ARRAYS
let nomes: string[] = ['vitor', 'João', 'Lucas']
//fazer array de numeros 
let numeros: number[] = [11, 12, 13, 14]

//juntando arrays misturado
let coisas:any = ['fulano', 11, 'ciclano', 12]

//funções no TS
function firstLetterUpperCase (nome: string, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
}
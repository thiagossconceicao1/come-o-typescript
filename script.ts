let Numero1 = document.getElementById("Numero1") as HTMLInputElement
let Numero2 = document.getElementById("Numero2") as HTMLInputElement
let Botao = document.getElementById("Calcular") as HTMLInputElement
let Res = document.getElementById("Resultado") as HTMLInputElement

function calcular (n1,n2){
    return (n1)+ (n2)
}

Botao.addEventListener('click',function(){
Res.innerHTML = calcular(Numero1.value, Numero2.value)
})
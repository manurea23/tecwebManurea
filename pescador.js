function calcularPeso(){

alert ("voce entrou no arquivo JS, \n Desenvolva seu algoritmo!");

 peso = parseFloat (document.getElementById("inppeso").value);

console.table (peso)

if (peso>50){

    excd = (peso -50);
    multa = (excd*4);
    alert ("a multa aplicada pelos quilos escendentes \n que foi de "+ excd+"Kg\n é igual a R$" + multa )
}
else {
    alert("não ouve excesso de quilos pescados")

}


}
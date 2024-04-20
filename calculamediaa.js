function calculaMedia(){

let nota1 = parseFloat(document.getElementById("nota1").value);
let nota2 = parseFloat(document.getElementById("nota2").value);
let rec = (document.getElementById("rec").value);
let nome = parseFloat(document.getElementById("aluno").value);

media = (nota1+nota2)/2; //calculo da minha váriavel

console.log(nota1);
console.log(media); //mostra a variavel de saída

// para a provação considere média >= 7.0

if (media>=7){
   document.getElementById("resultado").innerHTML = "o aluno"+ nome + "obteve média"+ media+ "\n resultado " + "aprovado"
}

else { alert("O aluno"+ nome + "obteve média"+ media+ "\n resultado " + "reprovado");
}
}
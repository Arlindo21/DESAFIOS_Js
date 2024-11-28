let titulo1=document.querySelector("h1");
 titulo1.innerHTML="Hora do Desafio";
 function Clic(){
    console.log("O botaõa foi clicado");
 }
 function Alerta(){
    alert("Eu amo JS");
 }
 function Cidade(){
    let cidade=prompt("Digite o nome de uma cidade do Brasil");
     alert(`Estive em ${cidade} e lembrei de você`);
 }
 function Soma(){
    let Numero1=parseInt(prompt("Digite o Primeiro valor"));
    let Numero2=parseInt(prompt("Digite segundo valor"));
    somatorio=Numero1+Numero2;
    alert(`A soma de ${Numero1} + ${Numero2} = ${somatorio}`);
 }
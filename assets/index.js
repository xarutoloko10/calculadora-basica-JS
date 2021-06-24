//Definição das variáveis baseadas nos IDs que serão usados
const espaco1 = document.getElementById('input1');
const espaco2 = document.getElementById('input2');
const subtrair = document.getElementById('minus');
const multiplicar = document.getElementById('times');
const dividir = document.getElementById('dividedby');
const somar = document.getElementById('plus');
const resultado = document.getElementById('result');

//Função de verificação dos Inputs
function verifyInputs() {
    if (espaco1.value === '' || espaco2.value === ''){
        resultado.value = null;
        alert('Você deve preencher todos os campos!');
        throw('Parando Função');
    }
}

//Função de somar
somar.addEventListener('click' , () =>  {
    let valor1 = parseInt(espaco1.value);
    let valor2 = parseInt(espaco2.value);

    verifyInputs();

    resultado.value = valor1 + valor2;

})

//Função de subtrair
subtrair.addEventListener('click' , () =>  {
    let valor1 = parseInt(espaco1.value);
    let valor2 = parseInt(espaco2.value);

    verifyInputs();

    resultado.value = valor1 - valor2;

})

//Função de multiplicar
multiplicar.addEventListener('click' , () =>  {
    let valor1 = parseInt(espaco1.value);
    let valor2 = parseInt(espaco2.value);

    verifyInputs();

    resultado.value = valor1 * valor2;

})

//Função de dividir
dividir.addEventListener('click' , () =>  {
    let valor1 = parseInt(espaco1.value);
    let valor2 = parseInt(espaco2.value);

    verifyInputs();

    //Verificador de divisão por zero
    if (valor2 !== 0){
        resultado.value = valor1 / valor2;
    } else {
        alert('Não é possível dividir por 0');
    }

})
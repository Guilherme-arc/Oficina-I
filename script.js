function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoIMC = document.getElementById('resultado-imc');

    if (!altura || !peso || altura <= 0 || peso <= 0) {
        resultadoIMC.textContent = 'Por favor, insira valores válidos para altura e peso.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (imc < 24.9) {
        classificacao = 'com peso normal.';
    } else if (imc < 29.9) {
        classificacao = 'com sobrepeso.';
    } else {
        classificacao = 'com obesidade.';
    }

    resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)} e você está ${classificacao}`;
}

function calculadorIMC() {
    const form = document.querySelector('.fomulario');
    const resultado = document.querySelector('.exibirResultado');
    const pesoInput = form.querySelector('.inputPeso');
    const alturaInput = form.querySelector('.inputAltura');

    function recebeValoresIMC(evento) {
        evento.preventDefault();

        // Obtém os valores dos campos de entrada
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);

        // Verifica se os valores são válidos e são números
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            if (isNaN(peso) || peso <= 0) {
                pesoInput.classList.add('input-invalido');
            } else {
                pesoInput.classList.remove('input-invalido');
            }

            if (isNaN(altura) || altura <= 0) {
                alturaInput.classList.add('input-invalido');
            } else {
                alturaInput.classList.remove('input-invalido');
            }

            resultado.innerHTML = `Digite valores numéricos válidos para peso e altura.`;
        } else {
            pesoInput.classList.remove('input-invalido');
            alturaInput.classList.remove('input-invalido');
            let calculoIMC = peso / (altura ** 2);
            
            if (calculoIMC < 18.5) {
                resultado.style.backgroundColor = "rgba(202, 182, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="abaixo-peso">(Abaixo do Peso)</span></p>`;
            }
            if (calculoIMC >= 18.5 && calculoIMC <= 24.99) {
                resultado.style.backgroundColor = "rgba(9, 255, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="peso-normal">(Peso Normal)</span></p>`;
            }
            if (calculoIMC >= 25 && calculoIMC <= 29.99){
                resultado.style.backgroundColor = "rgba(190, 130, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="sobrepeso">(Sobrepeso)</span></p>`;
            }
            if (calculoIMC >= 30 && calculoIMC <= 34.99) {
                resultado.style.backgroundColor = "rgba(167, 0, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="acima-peso">(Obesidade grau I)</span></p>`;
            }
            if (calculoIMC >=35 && calculoIMC <= 39.99) {
                resultado.style.backgroundColor = "rgba(167, 0, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="acima-peso">(Obesidade grau II)</span></p>`;
            }
            if (calculoIMC > 40) {
                resultado.style.backgroundColor = "rgba(167, 0, 0, 0.280)";
                resultado.innerHTML = `<p>Seu IMC é de: ${calculoIMC.toFixed(2)}. <span class="acima-peso">(Obesidade grau III)</span></p>`;
            }
        }
    }

    form.addEventListener('submit', recebeValoresIMC);
}

calculadorIMC();

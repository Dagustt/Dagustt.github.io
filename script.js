// script.js
document.getElementById("submit-btn").addEventListener("click", () => {
    const answers = document.querySelectorAll("input[type=radio]:checked");
    const resultDiv = document.getElementById("result");
  
    if (answers.length < 3) {
      alert("Por favor, responde todas las preguntas.");
      return;
    }
  
    // Contadores para cada personalidad
    let alfa = 0;
    let beta = 0;
    let omega = 0;
  
    // Sumar puntos según las respuestas
    answers.forEach(answer => {
      if (answer.value === "alfa") alfa++;
      if (answer.value === "beta") beta++;
      if (answer.value === "omega") omega++;
    });
  
    // Determinar resultado
    let result = "";
    if (alfa > beta && alfa > omega) result = "Eres Alfa: oh waos, felicidades, carepixa.";
    else if (beta > alfa && beta > omega) result = "Eres Beta: Vuelve a hacer el test no mames";
    else result = "Eres Omega: Lo sabía, lo sabía totalmente, siempre lo supe.";
  
    // Mostrar resultado
    resultDiv.textContent = result;
    resultDiv.classList.remove("hidden");
  });
  
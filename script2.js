// script.js
document.getElementById("submit-btn").addEventListener("click", () => {
    const answers = document.querySelectorAll("input[type=radio]:checked");
    const resultDiv = document.getElementById("result");
  
    if (answers.length < 4) {
      alert("Por favor, responde todas las preguntas.");
      return;
    }
  
    // Contadores para cada personalidad
    let Caitlyn = 0;
    let Vi = 0;
  
    // Sumar puntos según las respuestas
    answers.forEach(answer => {
      if (answer.value === "Caitlyn") Caitlyn++;
      if (answer.value === "Vi") Vi++;
    });
  
    // Determinar resultado
    let result = "";
    if (Caitlyn > Vi) result = "Eres una dictadora con complejos vampirísticos";
    else if (Vi > Caitlyn) result = "Eres una emo lesbiana con problemas de alcoholismo";
    
    // Mostrar resultado
    resultDiv.textContent = result;
    resultDiv.classList.remove("hidden");
  });
  
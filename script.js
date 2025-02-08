function generarPrediccion() {
  // Obtener el nombre del usuario
  const userName = document.getElementById("userName").value;

  // Saludar al usuario
  const saludo = userName ? `¡Hola, ${userName}!` : "¡Hola!";
  document.getElementById("saludo").textContent = saludo;

  // Obtener la condición del clima
  const weatherCondition = document.getElementById("weatherCondition").value;
  document.getElementById(
    "clima"
  ).textContent = `El clima actual es: ${weatherCondition}`;

  // Generar un número aleatorio entre 0 y 5
  const randomPrediction = Math.floor(Math.random() * 6);

  // Asignar la predicción según el número generado
  let prediction;
  switch (randomPrediction) {
    case 0:
      prediction = "Hoy será un día increíble, ¡disfrútalo!";
      break;
    case 1:
      prediction = "Mantente alerta, puede haber sorpresas inesperadas.";
      break;
    case 2:
      prediction = "Será un día productivo si te organizas bien.";
      break;
    case 3:
      prediction = "No dejes que los pequeños problemas arruinen tu día.";
      break;
    case 4:
      prediction = "Hoy es un buen día para probar algo nuevo.";
      break;
    case 5:
      prediction =
        "Confía en tu intuición, tomará las mejores decisiones por ti.";
      break;
    default:
      prediction = "Hoy es un día como cualquier otro.";
  }

  // Mostrar la predicción y un mensaje de despedida
  document.getElementById(
    "prediccion"
  ).textContent = `Predicción del día: ${prediction}`;
}

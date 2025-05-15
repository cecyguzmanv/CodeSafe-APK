// Ejemplo: Obtener bancos desde API
async function getBanks() {
  try {
    const response = await fetch('https://script.google.com/macros/s/TU_ID_SCRIPT/exec');
    const banks = await response.json();
    console.log('Bancos:', banks);
    // Actualiza tu UI aquí
  } catch (error) {
    console.error('Error:', error);
  }
}

// En Apps Script, usa doGet():
/*
function doGet() {
  const data = obtenerBancos(); // Tu lógica actual
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
const db = new Dexie ("formularioDB");


function verificarAnioYMes(anio, mes) {
  if (typeof anio !== 'number' || typeof mes !== 'number') {
    console.error("El año y el mes deben ser números");
    return;
  }
  
  if (mes < 1 || mes > 12) {
    console.error("El mes debe estar entre 1 y 12");
    return;
  }
  
  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  
  const tipoMes = (mes % 2 === 0) ? "par" : "impar";
  
  console.log(`Resultados para año ${anio} y mes ${mes}:`);
  console.log(`¿Es bisiesto?: ${esBisiesto ? "Sí" : "No"}`);
  console.log(`El mes es: ${tipoMes}`);
  
  return {
    anio,
    esBisiesto,
    mes,
    tipoMes
  };
}


verificarAnioYMes(2024, 2);
verificarAnioYMes(2023, 3); 
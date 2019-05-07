var distance, wheel, freq, vel, time;

function calculateTime() {
  getData();
  console.log("RESULTADOS");
  console.log("  Tiempo: " + distance / vel + "h // " + (distance / vel) * 60 * 60 + "s");
}

function calculateSpeed() {
  getData();
  console.log("RESULTADOS");
  console.log("  Velocidad media: " + distance / time + "km/h");
}

function getData() {
  distance = parseFloat($("distance").value);
  wheel = parseFloat($("wheel"));
  freq = parseFloat($("freq").value);
  vel = parseFloat($("vel").value);
  time =parseFloat($("time").value);
  
  console.log("DATOS INTRODUCIDOS");
  console.log("  Distancia: " + distance);
  console.log("  Longitud rueda: " + wheel);
  console.log("  Vueltas/sec: " + freq);
  console.log("  Velocidad: " + vel);
  console.log("  Tiempo invertido: " + time);
}

function $(id) {
  return document.getElementById(id);
}

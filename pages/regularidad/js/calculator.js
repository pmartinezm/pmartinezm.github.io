var distance, wheel, freq, vel, time;

function calculateTime() {
  getData();
  console.log("RESULTADOS");
  console.log("  Tiempo: " + distance / vel + "h // " + (distance / vel) * 60 * 60 + "s");
}

function calculateSpeed() {
  getData();
  console.log("RESULTADOS");
  console.log("  Velocidad media: " + distance / vel + "km/h");
}

function getData() {
  distance = parseInt($("distance").value);
  wheel = parseInt($("wheel"));
  freq = parseInt($("freq").value);
  vel = parseInt($("vel").value);
  time =parseInt($("time").value);
  
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

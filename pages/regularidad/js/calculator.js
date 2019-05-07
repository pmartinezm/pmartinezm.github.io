var distance, wheel, freq, vel, time, cont;

function calculateTime() {
  getData();
  
  var res = "RESULTADOS\n" + 
      "  Tiempo: " + distance / vel + "h // " + (distance / vel) * 60 * 60 + "s\n";
  cont.innerText += res;
  
  console.log("RESULTADOS");
  console.log("  Tiempo: " + distance / vel + "h // " + (distance / vel) * 60 * 60 + "s");
}

function calculateSpeed() {
  getData();
  
  var res = "RESULTADOS\n" + 
      "  Velocidad media: " + distance / time + " km/h\n";
  cont.innerText += res;
  
  console.log("RESULTADOS");
  console.log("  Velocidad media: " + distance / time + "km/h");
}

function getData() {
  distance = parseFloat($("distance").value);
  wheel = parseFloat($("wheel"));
  freq = parseFloat($("freq").value);
  vel = parseFloat($("vel").value);
  time =parseFloat($("time").value);
  
  cont = document.getElementsByClassName("results-results");
  
  var res = "DATOS INTRODUCIDOS\n" + 
      "  Distancia: " + distance + "\n" + 
      "  Longitud rueda: " + wheel + "\n" + 
      "  Vueltas/sec: " + freq + "\n" + 
      "  Velocidad: " + vel + "\n" + 
      "  Tiempo invertido: " + time + "\n";
  cont.innerText = res;
  
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

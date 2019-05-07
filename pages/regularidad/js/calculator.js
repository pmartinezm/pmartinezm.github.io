var distance, wheel, freq, vel, time;

function calculate() {
  getData();
  
  console.log("Tiempo: " + distance / vel);
}

function getData() {
  distance = parseInt($("distance").value);
  wheel = parseInt($("wheel"));
  freq = parseInt($("freq").value);
  vel = parseInt($("vel").value);
  time =parseInt($("time").value);
}

function $(id) {
  return document.getElementById(id);
}

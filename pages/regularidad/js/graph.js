var canvas, ctx;
var prepare = function() {
  canvas  = document.createElement("canvas");
  canvas.height = 150;
  canvas.width = 450;
  ctx = canvas.getContext("2d");
  document.getElementsByClassName("graph-graph")[0].appendChild(canvas);
  simulate();
}();

function simulate() {
  var count = 20;
  var readings = [];
  
  for(var i = 0; i < count; i++) {
    readings.push(generateSpeed(50,40));
  }
  
  for(var i = 0; i < readings.length; i++) {
    var x = canvas.width / count;
    ctx.fillStyle = "#ffc321";
    ctx.drawRect(x*i, canvas.height - 50 - readings[i], 10, 10);
  }
};

function generateSpeed(max, min) {
  return Math.random()*max+min;
}

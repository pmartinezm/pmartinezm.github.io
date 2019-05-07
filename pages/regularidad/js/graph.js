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
  var data = [];
  
  for(var i = 0; i < count; i++) {
    data.push(generateSpeed(50,40));
  }
  
  ctx.fillStyle = "#ffc321";
  ctx.strokeStyle = "#ffc321";
  
  for(var i = 0; i < data.length; i++) {
    var x = canvas.width / count;
    var y = canvas.height - 50 - data[i];
    drawDot(x*i, canvas.height - 50 - data[i], 5);
    if(i < data.length - 1) {
      drawLine(x * i, canvas.height - 50 - data[i], x * (i + 1), canvas.height - 50 - data[i + 1]);
    }
    //ctx.fillRect(x*i, canvas.height - 50 - readings[i], 10, 10);
  }
}

function drawDot(x, y, size) {
  var x = x - size / 2;
  var y = y - size / 2;
  ctx.fillRect(x, y, size, size);
}

function drawLine(x, y, xx, yy) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(xx, yy);
  ctx.stroke();
}

function generateSpeed(max, min) {
  return Math.random()*max+min;
}

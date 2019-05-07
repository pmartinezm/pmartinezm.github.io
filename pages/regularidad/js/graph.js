var canvas, ctx;
var yOffset = 50;

var prepare = function() {
  canvas  = document.createElement("canvas");
  canvas.height = 150;
  canvas.width = 450;
  ctx = canvas.getContext("2d");
  document.getElementsByClassName("graph-graph")[0].appendChild(canvas);
}();

function prepareGraph() {
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - yOffset);
  ctx.lineTo(canvas.width, canvas.height - yOffset);
  ctx.stroke();
}

function presentData(data) {
  prepareGraph();
  ctx.fillStyle = "#ffc321";
  ctx.strokeStyle = "#ffc321";
  for(var i = 0; i < data.length; i++) {
    var x = canvas.width / (data.length - 1);
    var y = canvas.height - yOffset - data[i];
    drawDot(x*i, canvas.height - yOffset - data[i], 5);
    if(i < data.length - 1) {
      drawLine(x * i, canvas.height - yOffset - data[i], x * (i + 1), canvas.height - yOffset - data[i + 1]);
    }
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

var canvas, ctx;
var prepare = function() {
  canvas  = document.createElement("canvas");
  canvas.height = 150;
  canvas.width = 450;
  ctx = canvas.getContext("2d");
  document.getElementsByClassName("graph-graph")[0].appendChild(canvas);
}();

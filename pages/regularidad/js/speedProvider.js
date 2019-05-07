function generateSpeed(readings) {
  readings = readings || 10;
  var data = [];
  
  for(var i = 0; i < readings; i++) {
    data.push(generateSpeed(50,40));
  }
  data[0] = 0;
  
  return data;
}

function generateSpeed(max, min) {
  return Math.random()*max+min;
}

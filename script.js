var v = setInterval(ceasFunction, 1000);

function ceasFunction() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("ceas").innerHTML = t;
}


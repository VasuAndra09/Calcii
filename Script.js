function add() {
  let a = inp1.value;
  let b = inp2.value;
  let sum = a + b;
  document.getElementById("out").innerHTML = sum;
}
function sub() {
  let a = inp1.value;
  let b = inp2.value;
  let sub = a - b;
  document.getElementById("out").innerHTML = sub;
}
function multi() {
  let a = inp1.value;
  let b = inp2.value;
  let multi = a * b;
  document.getElementById("out").innerHTML = multi;
}
function div() {
  let a = inp1.value;
  let b = inp2.value;
  let div = a / b;
  document.getElementById("out").innerHTML = div;
}
function pict() {
  document.getElementById("pic").style.display = "block";
}
function res() {
  document.getElementById("inp1").value = "";
  document.getElementById("inp2").value = "";
  document.getElementById("out").innerHTML = "Answer";
}

const inputText = document.getElementById("text");
const del = document.getElementById("del");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const slash = document.getElementById("slash");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const asterics = document.getElementById("star");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const rightBracket = document.getElementById("brac");
const leftBracket = document.getElementById("ket");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const percent = document.getElementById("percent");

one.onclick = function () {
  //   inputText.value = inputText.value + "1"; this means that

  inputText.value += "1";
};

two.onclick = () => {
  inputText.value += "2";
};

three.onclick = function () {
  inputText.value += "3";
};

slash.onclick = function () {
  inputText.value += "/";
};

four.onclick = () => {
  inputText.value += "4";
};

five.onclick = () => {
  inputText.value += "5";
};

six.onclick = () => {
  inputText.value += "6";
};

asterics.onclick = function () {
  inputText.value += "*";
};

seven.onclick = function () {
  inputText.value += "7";
};

eight.onclick = () => {
  inputText.value += "8";
};

nine.onclick = () => {
  inputText.value += "9";
};

minus.onclick = function () {
  inputText.value += "-";
};

rightBracket.onclick = function () {
  inputText.value += "(";
};

leftBracket.onclick = () => {
  inputText.value += ")";
};

zero.onclick = () => {
  inputText.value += "0";
};

plus.onclick = function () {
  inputText.value += "+";
};

clear.onclick = function () {
  inputText.value = "";
};

dot.onclick = () => {
  inputText.value += ".";
};

equals.onclick = () => {
  inputText.value = eval(inputText.value);
};

percent.onclick = function () {
  inputText.value += "%";
};

del.onclick = function () {
  const lastItemIndex = inputText.value.length - 1;

  inputText.value = inputText.value.slice(0, lastItemIndex);
};

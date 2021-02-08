function toHex(d) {
  var hex = ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
  return hex;
}
function hexaTime() {
  var date = new Date();
  var seconds = parseInt(date.getSeconds() * 255 / 59);
  var minutes = parseInt(date.getMinutes() * 255 / 59);
  var hours = parseInt(date.getHours() * 255 / 23);

  return "#" + toHex(hours) + toHex(minutes) + toHex(seconds);
}
function hexislight(color) {
  var hex = color.replace('#', '');
  var red = parseInt(hex.substr(0, 2), 16);
  var green = parseInt(hex.substr(2, 2), 16);
  var blue = parseInt(hex.substr(4, 2), 16);
  // it is a known formula, nothing magical here
  var brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000; 
  return brightness > 155; 
}
function bgColor() {
  var hexatime = hexaTime();
  document.body.style.background = hexatime;
  var hexaTimeDiv = document.getElementById("hexatime");
  hexaTimeDiv.innerText = hexatime;
  hexaTimeDiv.style.color = hexislight(hexatime) ? "#000000" : "#FFFFFF"; // light => black / dark => white
  setTimeout(bgColor, 100);
}
  
window.addEventListener("DOMContentLoaded", (event) => {
  bgColor(); // when Document is loaded ==> i call bgColor the first time
});

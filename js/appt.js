var i = 0;
var txt = document.querySelector('.type-this').innerHTML; /* The text */
document.getElementById("typ").innerHTML = '';
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typ").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

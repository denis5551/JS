let clickerCounter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

function changeSizes() {
  image.width = 220;
  clickerCounter.textContent ++;

  if (clickerCounter.textContent % 2 === 0) {
    image.width = 200;
  }
};

image.onclick = changeSizes;
 
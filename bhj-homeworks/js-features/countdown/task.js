

const addText = function(){
  const timer = document.getElementById("timer");
  timer.textContent -= 1;

  if (timer == 0) { 
    clearInterval(intervalID);
  }

}

let startInterval = setInterval(addText, 1000);

let intervalID = setInterval("alert('Вы победили в конкурсе!');", 60000);




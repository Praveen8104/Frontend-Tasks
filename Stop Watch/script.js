var timer;
var h=0,m=0,s=0,ms=0;
var running = false;

function start(){
  if(!running){
    running=true;
    timer = setInterval(updateTimer,10);
  }
}

function updateTimer(){
  ms++;
  if(ms>=100){
    s++;
    ms=0;
    if(s>=60){
      m++;
      s=0;
      if(m>=60){
        h++;
        m=0;
      }
    }
  }
  updateShow();
}

function updateShow() {
  document.querySelector('.hours').textContent = h.toString().padStart(2,'0');
  document.querySelector('.minutes').textContent = m.toString().padStart(2,'0');
  document.querySelector('.seconds').textContent = s.toString().padStart(2, '0');
  document.querySelector('.ms').textContent = ms.toString().padStart(2, '0');
}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  h=0,m=0,s=0,ms=0;
  updateShow();
}
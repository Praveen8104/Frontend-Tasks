var h = parseInt(prompt("Enter Hous: "));
var m = parseInt(prompt("Enter Minutes: "));
var s = parseInt(prompt('Enter Seconds'));

var timer;
function updateTimer(){
    document.getElementsByClassName('hours')[0].textContent=h.toString().padStart(2,'0');
    document.getElementsByClassName('minutes')[0].textContent=m.toString().padStart(2,'0');
    document.getElementsByClassName('seconds')[0].textContent=s.toString().padStart(2,'0');
}
updateTimer();
timer = setInterval(decreaseTime,1000);

function decreaseTime(){
    if(s=="00" && m=="00" && h=="00") {
        clearInterval(timer);
        return;
    }
    s--;
    if(s<"00"){
        m--;
        s=59;
        if(m<"00"){
            h--;
            m=59;
            if(h<"00"){
                h=0;
            }
        }
    }
    updateTimer();
}
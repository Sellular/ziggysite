setInterval(flip, 2000);
const ziggyHead = document.getElementById('ziggyPicture');
const ziggyHeadRev = document.getElementById('ziggyFlipped');
function flip(){
    if(ziggyHeadRev.style.transform === 'scale(-1, 1)'){
        ziggyHead.style.transform = 'scale(-1, 1)';
        ziggyHeadRev.style.transform = 'scale(1, 1)';
    } else{
        ziggyHead.style.transform = 'scale(1, 1)';
        ziggyHeadRev.style.transform = 'scale(-1, 1)';
    }
}
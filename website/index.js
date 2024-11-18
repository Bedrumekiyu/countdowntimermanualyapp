const inceaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const mylabel =  document.getElementById("mylabel");
let count= 0 ;
inceaseBtn.onclick = function(){
    count++;
    mylabel.textContent=count;
}
resetBtn.onclick = function(){
    count =0;
    mylabel.textContent=count;
}
decreaseBtn.onclick = function(){
    count--;
    mylabel.textContent=count;
}

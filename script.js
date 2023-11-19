
document.addEventListener("DOMContentLoaded",function(){
var counter = document.getElementById("counter");
var btn = document.getElementById("incrementBtn");
var count = 0;
function incrementCount() {
alert(count);
count++;
counter.innerText = count;
}
btn.addEventListener('click',incrementCount);
});
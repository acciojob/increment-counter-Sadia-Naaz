
document.addEventListener("DOMContentLoaded",function(){
var counter = document.getElementById("counter");
var btn = document.getElementById("incrementBtn");
var count = 0;
btn.addEventListener('click',function(){
alert(count);
count++;
counter.innerText = count;
});
btn.addEventListener('click',incrementCount);
});
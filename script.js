let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
let count = 0;
btn.addEventListener('click',incrementCount);
function incrementCount() {
alert(count);
count++;
counter.innerText = count;
}

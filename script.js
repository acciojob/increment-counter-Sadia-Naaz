let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
let count = 0;
btn.addEventListener('click',incrementCount);
function incrementCount() {
count++;
counter.innerText = count;
	alert(count);
}

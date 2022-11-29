const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const list = document.getElementById("list");
const error = document.createTextNode('fill in the field');
let amount = 1;
input.onfocus = function () {
    input.classList.remove("error-input")
    error.remove();
}
function addTask() {
    input.value = input.value.trim();
    if (input.value) {

        const li = document.createElement('li');
        li.innerText = input.value;
        input.value = "";
        ul.append(li);
        amount++;
        if (amount % 2) {
            ul.classList.remove("text-red");
            ul.classList.add("text-green");
        } else {
            ul.classList.remove("text-green");
            ul.classList.add("text-red");
        }
    } else {
        list.before(error);
        input.classList.add("error-input")
    }
}
button.addEventListener("click", function () {
    addTask();
});
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        addTask();
    }
});







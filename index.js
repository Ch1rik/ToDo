const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const inputError = document.getElementById("error");
let amount = 1;
input.addEventListener("focus", function () {
    inputError.classList.add("error");
    input.classList.remove("error-input")
})
function addTask() {
    const value = input.value.trim();
    if (value) {
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
        input.value = "";
        inputError.classList.remove("error");
        input.classList.add("error-input");
    }
}

button.addEventListener("click", addTask);
input.addEventListener('keydown',  (event)=> {
    if (event.code === 'Enter') {
        addTask();
    }
});
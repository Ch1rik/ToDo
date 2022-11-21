const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const space = /\s*/;
let amount = 1;
function launcher() {
    input.value = input.value.replace(space, '');
    if (input.value) {
        input.classList.remove("error");
        const li = document.createElement('li');
        li.innerText = input.value;
        input.value = "";
        ul.append(li);
        amount++;
        if (amount % 2) {
            ul.classList.remove("block");
            ul.classList.add("list");
        } else {
            ul.classList.remove("list");
            ul.classList.add("block");
        }
    } else {
        input.classList.add("error");
        alert("fill in the field");
    }
}
button.addEventListener("click", function () {
    launcher();
    input.focus();
});
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        launcher();
    }
});




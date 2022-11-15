const button = document.getElementById("button")
let amount = 1;
button.addEventListener("click", function () {
    const input = document.getElementById("input");
    const li = document.createElement('li')
    const ul = document.getElementById("ul")
    li.innerText = input.value;
    input.value="";
    ul.append(li)
    amount++
    if (amount % 2) {
        ul.classList.remove("block")
        ul.classList.add("list")
    } else {
        ul.classList.remove("list")
        ul.classList.add("block")
    }
})

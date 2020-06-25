let array = [];
const result = document.querySelector("#resultNumber");
const btn = document.querySelectorAll(".btn").forEach(item => {
    item.addEventListener("click", getNumber);
})







function saveNumber() {


}

function getNumber(event) {
    const value = event.target.innerHTML;
    console.log(value);
    array.push(value);
    console.log(array);
    saveNumber();
}
result.innerText = "hi";
console.log(eval(1 + 1));
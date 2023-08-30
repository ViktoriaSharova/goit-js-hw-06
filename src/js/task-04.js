const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const initialValue = document.getElementById("value");
let counterValue = 0;
decrementBtn.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});
incrementBtn.addEventListener(`click`, function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
});
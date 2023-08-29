// get elements

const decrement = document.getElementById("decrement");
const counter = document.getElementById("counter");
const increment = document.getElementById("increment");

let count = 0;

// рендер функция
function renderNewCount() {
  counter.innerHTML = count;
}

// уменьшить
decrement.addEventListener("click", () => {
  count -= 1;
  renderNewCount();
  // count--;
  // count = count - 1;
});

// увеличить
increment.addEventListener("click", () => {
  count++;
  renderNewCount();
  // count += 1;
  // count = count + 1;
});

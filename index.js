const addBtn = document.getElementById("add-btn");
const addInput = document.getElementById("add-input");
const mainEl = document.querySelector("main");
const empty = document.querySelector(".empty-todo");
let listCounter = 0;
let delBtns = [];

addBtn.addEventListener("click", addTodoItem);
addInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTodoItem();
});

function createHTMl(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function addTodoItem() {
  if (addInput.value === "") return;
  listCounter++;
  empty.classList.add("hide");

  const template = createHTMl(`
    <div class="container">
      <div>
        <input type="checkbox" id="checkbox${listCounter}"></input>
        <label for="checkbox${listCounter}">
          <span>${addInput.value}</span>
        </label>
      </div>
      <button id="del-btn${listCounter}" class="del-btn"><i class="fa-lg fa-solid fa-trash"></i></button>
    </div>
    `);
  mainEl.appendChild(template);
  const currentBtn = document.getElementById(`del-btn${listCounter}`);
  delBtns.push(currentBtn);
  currentBtn.addEventListener("click", function () {
    listCounter--;
    this.parentNode.remove();
    if (listCounter === 0) empty.classList.remove("hide");
  });
}

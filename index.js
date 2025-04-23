const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  todoItem.innerHTML = `
                <input type="checkbox" class="checkbox">
                <span class="todo-text">${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;

  const checkbox = todoItem.querySelector(".checkbox");
  checkbox.addEventListener("change", function () {
    todoItem.classList.toggle("completed");
  });

  const deleteBtn = todoItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    todoItem.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => todoItem.remove(), 300);
  });

  todoList.appendChild(todoItem);
  todoInput.value = "";
}

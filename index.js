const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let todos = [];

function displayTasks() {
  taskList.innerHTML = "";

  todos.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button class="done-btn" onclick="toggleTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">✖</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  todos.push({ text, completed: false });
  taskInput.value = "";
  displayTasks();
}

function toggleTask(index) {
  todos[index].completed = !todos[index].completed;
  displayTasks();
}

function deleteTask(index) {
  todos.splice(index, 1);
  displayTasks();
}

addTaskBtn.addEventListener("click", addTask);

// Optional: Allow pressing "Enter" to add task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

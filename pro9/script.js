function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${task}</span>
    <button class="delete" onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
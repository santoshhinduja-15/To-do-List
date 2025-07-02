function showAlert(message, type = "info", timeout = 3000) {
  const alertContainer = document.getElementById("alertContainer");

  const alert = document.createElement("div");
  alert.className = `alert alert-${type} fade show text-center fs-5`;
  alert.role = "alert";
  alert.innerHTML = `<i class="bi bi-info-circle-fill me-2"></i>${message}`;

  alertContainer.innerHTML = ""; // Clear existing alerts
  alertContainer.appendChild(alert);

  // Auto-dismiss after timeout
  setTimeout(() => {
    alert.classList.remove("show");
    alert.classList.add("hide");
    setTimeout(() => alert.remove(), 300);
  }, timeout);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    showAlert("Please enter a task.", "warning");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.className = "flex-grow-1";
  span.textContent = taskText;

  const btnGroup = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.className = "btn btn-outline-success btn-sm me-2";
  doneBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
  doneBtn.onclick = () => {
    span.classList.toggle("text-decoration-line-through");
    span.classList.toggle("text-muted");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger btn-sm";
  deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
  deleteBtn.onclick = () => {
    li.remove();
    showAlert("Task deleted successfully!", "danger");
  };

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  showAlert("Task added successfully!", "success");
}

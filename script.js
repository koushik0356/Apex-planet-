// FORM VALIDATION
document.getElementById("f1Form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("driverName").value.trim();
  const team = document.getElementById("team").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value;
  const exp = document.getElementById("experience").value.trim();
  const license = document.getElementById("license").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !team || !email || !country || !exp || !license) {
    status.textContent = "🚫 Pit Stop Required — Fill all fields!";
    status.style.color = "yellow";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = "❌ Invalid Email Format!";
    status.style.color = "red";
    return;
  }

  status.textContent = "🏁 Registration Complete — Welcome to the Grid!";
  status.style.color = "#00ff00";

  this.reset();
});

// TO-DO LIST FUNCTIONALITY
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
});

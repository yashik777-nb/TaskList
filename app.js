// Define UI Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load All Event Listeners
loadEventListeners();

function loadEventListeners() {
  // Add Task Event
  form.addEventListener("submit", addTask);
  // Remove Task Event
  taskList.addEventListener("click", removeTask);
  // Clear Tasks
  clearBtn.addEventListener("click", clearTasks);
  // Filter Tasks
  filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  // Create Li Element
  const li = document.createElement("li");
  // Add Class
  li.className = "collection-item";
  // Create Text Node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create New Link Elelemnt
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  // Icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to LI
  li.appendChild(link);
  //   console.log(li);

  // Append li to Ul
  taskList.appendChild(li);

  // Clear the Input
  taskInput.value = "";

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // console.log(e.target);
    if (confirm("Are You Sure ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks(e) {
  // Way 1
  //   taskList.innerHTML = "";

  // Way 2 - Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

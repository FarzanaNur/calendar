let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text, completed: false });
    taskInput.value = ''; // Clear the input field
    updateTasklists();
  }
};

const updateTasklists = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? 'completed' : ''}">
          <input type="checkbox" class="checkbox" name="" id="" ${task.completed ? 'checked' : ''}>
          <p>${task.text}</p>
        </div>
        <div class="icons">
          <img src="./assets/edit.png" onclick="editTask(${index})"/>
          <img src="./assets/bin.png" onclick="deleteTask(${index})"/>
        </div>
      </div>
    `;
    listItem.addEventListener('change', () => toggleTestComplete(index));
    taskList.appendChild(listItem);
  });
};

const toggleTestComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasklists();
};

document.getElementById("newTask").addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
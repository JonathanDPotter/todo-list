import "./style.css";

const state = {
  projects: [],
  activeProject: "",
};

const LOCAL_STORAGE_LIST_KEY = "project.lists";
state.projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const projectsTarget = document.getElementById("project-list");
const newProjectButton = document.getElementById("new-project-button");
const newProjectName = document.getElementById("new-project");
const activeTarget = document.getElementById("active-target");

// class for each project(list of todos)
class Project {
  constructor(name) {
    this.name = name;
    this.date = new Date().toISOString();
    this.toDos = [];
    this.index = state.projects.length;
  }
}

// class for each todo item in a project list
class ToDo {
  constructor(name, index, parentIndex) {
    this.name = name;
    this.index = index;
    this.parentIndex = parentIndex;
    this.done = false;
    this.flag = false;
  }
}

function clearTarget(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(state.projects));
}

// renders list of projects to DOM
function renderProjects() {
  const projectNames = state.projects.map((i) => i.name);

  clearTarget(projectsTarget);

  projectNames.forEach((element, index) => {
    const newListItem = document.createElement("li");
    newListItem.className = "list-item";
    newListItem.textContent = element;
    newListItem.addEventListener("click", (event) => {
      event.preventDefault();
      renderActive(index);
    });

    projectsTarget.appendChild(newListItem);

    // re-label projects with correct indices
    state.projects[index].index = index;
  });

  save();
}

// renders active project to DOM
function renderActive(active) {
  clearTarget(activeTarget);
  const activeProject = state.projects[active];
  const template = document.getElementsByTagName("template")[0];
  const clone = template.content.cloneNode(true);
  activeTarget.appendChild(clone);

  // assign elements rendered from template to vars
  const activeTitle = document.getElementById("active-title");
  const removeDone = document.getElementById("remove-done");
  const removeProject = document.getElementById("remove-project");
  const addToDo = document.getElementById("add-to-do");
  const newToDo = document.getElementById("new-to-do");
  const date = document.getElementById("date");

  activeTitle.textContent = activeProject.name;
  date.value = activeProject.date.substr(0, 10);

  date.addEventListener("change", (event) => {
    event.preventDefault();
    state.projects[active].date = new Date(date.value).toISOString();
  });

  removeProject.addEventListener("click", (event) => {
    event.preventDefault();
    state.projects.splice(activeProject.index, 1);
    renderProjects();
    clearTarget(activeTarget);
  });

  removeDone.addEventListener("click", (event) => {
    event.preventDefault();
    let result = [];

    state.projects[active].toDos.forEach((obj) => {
      if (obj.done === false) {
        result.push(obj)
      }
    });
    state.projects[active].toDos = result;
    renderActive(active);
  });

  addToDo.addEventListener("click", (event) => {
    event.preventDefault();
    const newToDoItem = new ToDo(
      newToDo.value,
      activeProject.toDos.length,
      activeProject.index
    );
    activeProject.toDos.push(newToDoItem);
    renderActiveToDos(activeProject.toDos);
    newToDo.value = "";
    save();
  });
  renderActiveToDos(activeProject.toDos);
  save();
}

// renders todos in active project
function renderActiveToDos(list) {
  const toDoTarget = document.getElementById("to-do-target");
  const template = document.getElementsByTagName("template")[1];
  clearTarget(toDoTarget);

  list.forEach((obj, index) => {
    const clone = template.content.cloneNode(true);
    const done = clone.querySelector(".done");
    const listItem = clone.querySelector(".list-item");
    const flag = clone.querySelector(".flag");
    const deleteItem = clone.querySelector(".delete");

    toDoTarget.appendChild(clone);

    done.addEventListener("click", (event) => {
      obj.done ? (obj.done = false) : (obj.done = true);
      listItem.classList.contains("strikethrough")
        ? listItem.classList.remove("strikethrough")
        : listItem.classList.add("strikethrough");
    });

    listItem.textContent = list[index].name;
    if (obj.done) {
      listItem.classList.add("strikethrough");
    }
    if (obj.flag) {
      listItem.classList.add("flagged");
    }

    flag.addEventListener("click", (event) => {
      event.preventDefault();
      obj.flag ? (obj.flag = false) : (obj.flag = true);
      listItem.classList.contains("flagged")
        ? listItem.classList.remove("flagged")
        : listItem.classList.add("flagged");
    });

    deleteItem.addEventListener("click", (event) => {
      event.preventDefault();
      list.splice(index, 1);
      renderActiveToDos(list);
    });

    const newListItem = toDoTarget.childNodes;
  });
}

// sets up button for adding projects, the only initial functionality
function setup() {
  newProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newProject = new Project(newProjectName.value);
    state.projects.push(newProject);
    renderProjects();
    newProjectName.value = "";
  });
  renderProjects();
}

setup();

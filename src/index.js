import "./style.css";

const state = {
  projects: [],
  activeProject: "",
};

const LOCAL_STORAGE_LIST_KEY = "project.lists";
state.projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const projectList = document.getElementById("project-list");
const newProjectButton = document.getElementById("new-project-button");
const newProjectName = document.getElementById("new-project");
const activeTarget = document.getElementById("active-target");

// class for each project(list of todos)
class Project {
  constructor(name) {
    this.name = name;
    this.date = new Date();
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

// renders list of projects to DOM
function renderProjects() {
  const projectNames = state.projects.map((i) => i.name);
  document.querySelectorAll(".list-item").forEach((i) => i.remove());
  projectNames.forEach((element, index) => {
    const newListItem = document.createElement("li");
    newListItem.className = "list-item";
    newListItem.textContent = element;
    newListItem.addEventListener("click", (event) => {
      event.preventDefault();
      renderActive(index);
    });
    projectList.appendChild(newListItem);
    // re-label projects with correct indices
    state.projects[index].index = index;
  });
  save();
}

function clearActive() {
  while (activeTarget.firstChild) {
    activeTarget.removeChild(activeTarget.firstChild);
  }
}

// renders active project to DOM
function renderActive(active) {
  clearActive();
  const activeProject = state.projects[active];
  const template = document.getElementsByTagName("template")[0];
  const clone = template.content.cloneNode(true);
  activeTarget.appendChild(clone);

  // assign elements rendered from template to vars
  const activeTitle = document.getElementById("active-title");
  const removeDone = document.getElementById("remove-done");
  const removeProject = document.getElementById("remove-project");
  activeTitle.textContent = activeProject.name;

  removeProject.addEventListener("click", (event) => {
    console.log(activeProject.index);
    state.projects.splice(activeProject.index, 1);
    renderProjects();
    clearActive();
  });

  renderActiveToDos(activeProject.list);
  save();
}

// renders todos in active project
function renderActiveToDos(list) {
  const done = document.querySelectorAll(".done");
  const flag = document.querySelectorAll(".flag");
  const deleteList = document.querySelectorAll(".delete");
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(state.projects));
}

// sets up button for adding projects, the only initial functionality
newProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newProject = new Project(newProjectName.value);
  state.projects.push(newProject);
  renderProjects();
  newProjectName.value = "";
});

renderProjects();

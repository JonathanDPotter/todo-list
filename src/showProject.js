function showProject(project) {
  const field = document.getElementById("show");
  const projectContainer = document.createElement("div");
  const name = document.createElement("h1");
  const date = document.createElement("p");
  const list = document.createElement("ul");

  project.items.forEach((i) => {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  });
  name.textContent = project.name;
  date.textContent = project.date;

  projectContainer.appendChild(name);
  projectContainer.appendChild(date);
  projectContainer.appendChild(list);
  field.appendChild(projectContainer);
  projectContainer.className = "projects"; 
}

export default showProject;

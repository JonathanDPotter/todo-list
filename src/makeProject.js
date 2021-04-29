import state from "/src/index.js";
import showProject from "/src/showProject"

const projectFactory = (name = "New Project", date = new Date(), items) => ({
  name,
  date,
  items,
  
  setDate(newDate) {
    this.date = newDate;
  },
  
  setName(name) {
    this.name = name;
  },
  
  addItem(item) {
    this.items.push(item);
  },
  
  removeItem() {},
  
  getItems() {
    return this.items;
  }
  
});

function makeProject(name, date, items) {
  const newProject = projectFactory(name, date, items);
  state.addItem(newProject)
  console.log(state)
  showProject(newProject)
}

export default makeProject;

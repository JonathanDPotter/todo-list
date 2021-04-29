import "./style.css";
import setup from "/src/setup.js";

const state = {
  projects: [],
  addItem(project) {
    this.projects.push(project);
  },
  removeItem(i) {
    this.projects.splice(i, 1);
  },
};

setup.setup();

export default state ;

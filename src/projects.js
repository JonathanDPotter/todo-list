export function makeProject(name = "New Project", date = new Date()) {
  class Project {
    constructor(projName, projDate) {
      this.name = projName;
      this.date = projDate;
      this.items = [];
    }

    setDate(newDate) {
      this.date = newDate;
    }

    setName(newName) {
      this.name = newName;
    }

    addItem(newItem) {
      this.items.push(newItem);
    }

    removeItem() {}

    getItems() {
      return this.items;
    }
  }

  return new Project(name, date);

}

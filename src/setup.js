import makeProject from "/src/makeProject.js";

function setup() {
  const button = document.getElementById("make-list");
  const create = document.getElementById("create");
  const form = document.getElementById("form");
  const formInput = document.querySelectorAll("input");

  button.addEventListener("click", () => (create.className = "unhide"));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    create.className = "hide";
    let inputs = [
      formInput[2].value,
      formInput[3].value,
      formInput[4].value,
      formInput[5].value,
      formInput[6].value,
      formInput[7].value,
      formInput[8].value,
      formInput[9].value,
      formInput[10].value,
      formInput[11].value,
    ];
    let items = [];

    inputs.forEach((i) => {
      if (i) {
        items.push(i);
      }
    });

    makeProject(formInput[0].value, formInput[1].value, items);
  });
}

export default { setup };

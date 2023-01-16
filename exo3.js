const numberButton = 3;

let p = document.createElement("p");

document.getElementById("main").appendChild(p);

const boutonAdd = document.querySelector(".btn-add");

boutonAdd.addEventListener("click", () => {
  for (let index = 0; index < numberButton; index++) {
    let btn = document.createElement("button");

    console.log(index + 1);
  }
});

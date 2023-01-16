// const divs = document.getElementsByTagName("div");

// for (let index = 0; index < divs.length; index++) {
//   console.log(`Element n° ${index}: ${divs[index]}`);
//   alert(`Element n° ${index}: ${divs[index]}`);
// }

// const query = document.querySelector("#menu .item span");
// const queryAll = document.querySelectorAll("#menu .item span");

// console.log(query.innerHTML);
// console.log(queryAll.length);
// console.log(queryAll[0].innerHTML, queryAll[1].innerHTML);

// alert(query.innerHTML);
// alert(queryAll.length);
// alert(queryAll[0].innerHTML, queryAll[1].innerHTML);

// const myLink = document.getElementById("myLink");
// let href = myLink.href;
// console.log(href);
// myLink.href = "http://www.clg-rimbaud-aubergenville.ac-versailles.fr/";
// console.log(myLink.href);

// const menu = document.getElementById("menu");

// const contents = document.getElementsByClassName("content");
// for (let index = 0; index < contents.length; index++) {
//   const element = contents[index];
//   console.log(element);
// }

// const tags = document.getElementsByTagName("article");
// for (let index = 0; index < tags.length; index++) {
//   const element = tags[index];
//   console.log(element);
// }

// const aElement = document.querySelector("#myId p.article > a");
// console.log(aElement);

// let main = document.getElementById("main2");

let p1 = document.getElementsByTagName("p");

p1[0].style.color = "#fff";
p1[0].style.backgroundColor = "#000";
p1[0].style.fontWeight = "bold";

window.addEventListener("resize", () => {
  console.log(
    "width: " + document.documentElement.clientWidth,
    "height :" + document.documentElement.clientHeight
  );
});

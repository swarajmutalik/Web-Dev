let container = document.querySelector(".container").innerHTML;
console.log(container);

let box = document.querySelector(".box").innerText;
console.log(box);

let box1 = document.querySelector(".container").outerHTML;
console.log(box1);

let box2 = document.querySelector(".container").tagName;
console.log(box2);

let box3 = document.querySelector(".container").nodeName;
console.log(box3);

let box4 = document.querySelector(".container").textContent;
console.log(box4);

let box5 = document.querySelector(".container").hidden;
console.log(box5);

let box6 = (document.querySelector(".box").innerHTML = "Hello, how are you ?");
console.log(box6);

let box7 = document.querySelector(".box").hasAttribute("style");
console.log(box7);

let box8 = document.querySelector(".box").getAttribute("style");
console.log(box8);

let box9 = document
  .querySelector(".box")
  .setAttribute("style", "display: inline");
console.log(box9);

let box10 = document.querySelector(".box").attributes;
console.log(box10);

let box11 = document.querySelector(".box").removeAttribute("style");
console.log(box11);

// let div = document.createElement('div');
// div.innerHTML = "I have been inserted <b>into this page</b>"
// div.setAttribute('class', 'created');
// document.querySelector('.container').append(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin", "<b> Please help me</b>");

let details = document.querySelector(".container").classList;
console.log(details);

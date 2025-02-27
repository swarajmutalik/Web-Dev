document.title = "This is good";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "red";

let heading = document.getElementById("heading");
console.log(heading.innerText);
heading.style.color = "blue"
console.log(heading.innerHTML);
console.log(heading.textContent);

let img = document.getElementById("logo");

console.log(img.id);
console.log(img.className);
console.log(img.src);
console.log(img.getAttribute("alt"));

img.setAttribute("alt", "updated logo");
console.log(img.alt);

let text = document.getElementById("text");

text.style.color = "red";
text.style.fontSize = "20px";
text.style.backgroundColor = "yellow";

let demo = document.getElementById("demo");

console.log(demo.className);

demo.classList.add("new-class");
demo.classList.remove("text-class");

let parent = document.getElementById("parent");
let child1 = document.getElementById("child1");

console.log(child1.parentElement); 
console.log(parent.children); 
console.log(child1.nextElementSibling); 

let userInput = document.getElementById("username");
console.log(userInput.value);

let checkbox = document.getElementById("agree");
console.log(checkbox.checked);

let dropdown = document.getElementById("dropdown");
console.log(dropdown.value);


let para = document.getElementsByClassName("text")

for (let p of para) {
    p.style.color = "green";
}

let paras = document.getElementsByTagName("p")
console.log(paras.length);

for(let p of paras) {
    p.style.backgroundColor = "yellow";
}

let firstPara = document.querySelector(".text");
firstPara.style.fontWeight = "bold";


let allParas = document.querySelectorAll(".text");
allParas.forEach(p => { 
    p.style.color = "green";
})



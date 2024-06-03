console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(
  document.querySelector(".box").setAttribute("style", "display : inline")
);

console.log(document.querySelector(".box").removeAttribute("style"));
console.log(document.querySelector(".box").dataset);

// let div = document.createElement('div')
// div.innerHTML = "<b>I have been inserted</b>"
// div.setAttribute('class','created')
// document.querySelector('.container').append(div)

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b>Under the water, help me</b>");

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.toggle("red"));

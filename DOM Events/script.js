let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   document.querySelector(".box").innerHTML = "<b>I was clicked</b>";
//   //   alert("I was clicked")
// });

btn.addEventListener("contextmenu", () => {
  alert("Dont right click otherwise the we will get hacked");
});

document.addEventListener("keydown", (e) => {
  console.log(e, e.key);
});

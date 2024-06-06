let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
// alert("I was clicked");
//   document.querySelector(".box").innerHTML =
//     "<b>Yayy you were clicked</b> Enjoy your click!";
// });

btn.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b>Yay you were clicked</b> Enjoy your click.";
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

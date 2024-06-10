console.log("Hello");
console.log("Hey");

setTimeout(() => {
  console.log("SetTimeOut function");
}, 1000);

setTimeout(() => {
  console.log("SetTimeOut function 2");
}, 2000);

console.log("Ending");

const fn = () => {
  console.log("Nothing to show");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Swaraj",fn);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

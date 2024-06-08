console.log("Hello");
console.log("Holla");

setTimeout(() => {
  console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
  console.log("I am insideout settimeout 2");
}, 0);

console.log("The End");

const fn = () => {
    console.log("Nothing")
}

const callback = ((arg,fn) =>{
    console.log(arg)
    fn()
})

const loadscript = (src, callback){
    let sc = document.createElement('script')
    sc.src = src
    sc.onload = callback("Swaraj",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
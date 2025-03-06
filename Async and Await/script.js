// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

async function getData() {
  // Simulating getting data from a server
  //   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userID: 1,
    }),
    headers: {
      "Content-type": "application/json; charset-UTF-8",
    },
  });

  let data = await x.text();
  return data;
}

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");

  let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("task 2");
}

main();

// data.then((v) =>{

//     console.log(data);

//     console.log("Process Data");

//     console.log("task-2");
// })

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}


async function main() {
  console.log("Loading Modules");

  console.log("Something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("task 2");
}

main()

// data.then((v) => {
//   console.log(data);

//   console.log("Process Data");

//   console.log("task 2");
// });

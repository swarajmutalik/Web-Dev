let a = [1, 93, 5, 6, 88];

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }

// a.forEach((value, index, arr) => {
//     console.log(value, index);
// })

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

for (const value of a) {
    console.log(value);
}
